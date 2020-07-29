<?php
/**
 * Upload Sync to Cloudinary.
 *
 * @package Cloudinary
 */

namespace Cloudinary\Sync;

use Cloudinary\Sync;

/**
 * Class Upload_Sync.
 *
 * Push media to Cloudinary on upload.
 */
class Upload_Sync {

	/**
	 * Holds the plugin instance.
	 *
	 * @since   0.1
	 *
	 * @var     \Cloudinary\Plugin Instance of the global plugin.
	 */
	private $plugin;

	/**
	 * The Push_Sync object.
	 *
	 * @var \Cloudinary\Sync\Push_Sync
	 */
	private $pusher;

	/**
	 * This feature is enabled.
	 *
	 * @var bool
	 */
	private $enabled;

	/**
	 * Holds a list of unsynced images to push on end.
	 *
	 * @var array
	 */
	private $to_sync = array();

	/**
	 * Upload_Sync constructor.
	 *
	 * @param \Cloudinary\Plugin $plugin  The plugin.
	 * @param bool               $enabled Is this feature enabled.
	 * @param object             $pusher  An object that implements `push_attachments`. Default: null.
	 */
	public function __construct( \Cloudinary\Plugin $plugin, $enabled = false, $pusher = null ) {
		$this->plugin  = $plugin;
		$this->pusher  = $pusher;
		$this->enabled = $enabled;
	}

	/**
	 * Register any hooks that this component needs.
	 */
	private function register_hooks() {
		// Add action to upload.
		add_action( 'add_attachment', array( $this, 'push_on_upload' ), 10 );
		// Filter id for on-demand upload sync.
		add_filter( 'cloudinary_id', array( $this, 'prep_on_demand_upload' ), 9, 2 );
		// Show sync status.
		add_filter( 'cloudinary_media_status', array( $this, 'filter_status' ), 10, 2 );
		// Hook for on demand upload push.
		add_action( 'shutdown', array( $this, 'init_background_upload' ) );
		// Hook into auto upload sync.
		add_filter( 'cloudinary_on_demand_sync_enabled', array( $this, 'auto_sync_enabled' ) );
		// Handle bulk and inline actions.
		add_filter( 'handle_bulk_actions-upload', array( $this, 'handle_bulk_actions' ), 10, 3 );
		// Add inline action.
		add_filter( 'media_row_actions', array( $this, 'add_inline_action' ), 10, 2 );

		// Add Bulk actions.
		add_filter( 'bulk_actions-upload', function ( $actions ) {
			$cloudinary_actions = array(
				'cloudinary-push' => __( 'Push to Cloudinary', 'cloudinary' ),
			);

			return array_merge( $cloudinary_actions, $actions );
		} );
	}

	/**
	 * Add an inline action for manual sync.
	 *
	 * @param array    $actions All actions.
	 * @param \WP_Post $post    The current post object.
	 *
	 * @return array
	 */
	function add_inline_action( $actions, $post ) {
		if ( current_user_can( 'delete_post', $post->ID ) ) {
			$action_url = add_query_arg(
				array(
					'action'   => 'cloudinary-push',
					'media[]'  => $post->ID,
					'_wpnonce' => wp_create_nonce( 'bulk-media' ),
				),
				'upload.php'
			);
			if ( ! $this->plugin->components['sync']->is_synced( $post->ID ) ) {
				$actions['cloudinary-push'] = sprintf(
					'<a href="%s" aria-label="%s">%s</a>',
					$action_url,
					/* translators: %s: Attachment title. */
					esc_attr( sprintf( __( 'Push to Cloudinary &#8220;%s&#8221;' ), 'asd' ) ),
					__( 'Push to Cloudinary', 'cloudinary' )
				);
			} else {
				$actions['cloudinary-push'] = sprintf(
					'<a href="%s" aria-label="%s">%s</a>',
					$action_url,
					/* translators: %s: Attachment title. */
					esc_attr( sprintf( __( 'Push to Cloudinary &#8220;%s&#8221;' ), 'asd' ) ),
					__( 'Re-sync to Cloudinary', 'cloudinary' )
				);
			}
		}

		return $actions;
	}

	/**
	 * Handles bulk actions for attachments.
	 *
	 * @param string $location The location to redirect after.
	 * @param string $action   The action to handle.
	 * @param array  $post_ids Post ID's to action.
	 *
	 * @return string
	 */
	public function handle_bulk_actions( $location, $action, $post_ids ) {

		switch ( $action ) {
			case 'cloudinary-push' :
				foreach ( $post_ids as $post_id ) {
					delete_post_meta( $post_id, Sync::META_KEYS['sync_error'] );
					delete_post_meta( $post_id, Sync::META_KEYS['public_id'] );
					delete_post_meta( $post_id, Sync::META_KEYS['pending'] );
					$file = get_attached_file( $post_id );
					wp_generate_attachment_metadata( $post_id, $file );
					$this->prep_upload( $post_id );
				}
				break;
		}

		return $location;

	}

	/**
	 * Check if auto-sync is enabled.
	 *
	 * @param bool $enabled Flag to determine if autosync is enabled.
	 *
	 * @return bool
	 */
	public function auto_sync_enabled( $enabled ) {
		if ( isset( $this->plugin->config['settings']['sync_media']['auto_sync'] ) && 'on' === $this->plugin->config['settings']['sync_media']['auto_sync'] ) {
			$enabled = true;
		}

		return $enabled;
	}

	/**
	 * Push new attachment to Cloudinary on upload.
	 *
	 * @param int $post_id The post.
	 */
	public function push_on_upload( $post_id ) {

		// Only if this is a media file and feature is enabled.
		if ( $this->plugin->components['media']->is_media( $post_id ) && apply_filters( 'cloudinary_upload_sync_enabled', $this->enabled ) ) {
			// Lets do the background upload to keep the upload window as fast as possible.
			update_post_meta( $post_id, '_cloudinary_pending', time() ); // Make sure it doesn't get resynced.
			$params = array(
				'attachment_ids' => array( $post_id ),
			);
			$this->plugin->components['api']->background_request( 'process', $params );
		}
	}

	/**
	 * Setup this component.
	 */
	public function setup() {
		if ( empty( $this->pusher ) ) {
			$this->pusher = $this->plugin->components['sync']->managers['push'];
		}
		$this->register_hooks();
	}

	/**
	 * Prepare an attachment without a cloudinary id, for background, on-demand push.
	 *
	 * @param string|bool $cloudinary_id The public ID for a cloudinary asset.
	 * @param int         $attachment_id The local attachment ID.
	 *
	 * @return string
	 */
	public function prep_on_demand_upload( $cloudinary_id, $attachment_id ) {
		$attachment_id = intval( $attachment_id );
		if ( $attachment_id && false === $cloudinary_id ) {
			// Check that this has not already been prepared for upload.
			if ( ! $this->is_pending( $attachment_id ) && apply_filters( 'cloudinary_on_demand_sync_enabled', $this->enabled ) ) {
				$max_size = ( wp_attachment_is_image( $attachment_id ) ? 'max_image_size' : 'max_video_size' );
				$file     = get_attached_file( $attachment_id );
				// Get the file size to make sure it can exist in cloudinary.
				if ( ! empty( $this->plugin->components['connect']->usage[ $max_size ] ) && file_exists( $file ) && filesize( $file ) < $this->plugin->components['connect']->usage[ $max_size ] ) {
					$this->add_to_sync( $attachment_id );
				} else {
					// Check if the src is a url.
					$file = get_post_meta( $attachment_id, '_wp_attached_file', true );
					if ( $this->plugin->components['media']->is_cloudinary_url( $file ) ) {
						// Download sync.
						$this->add_to_sync( $attachment_id );
					}
				}
			}
		}

		return $cloudinary_id;
	}

	/**
	 * Prep an attachment for upload.
	 *
	 * @param int $attachment_id The attachment ID to prep for upload.
	 */
	public function prep_upload( $attachment_id ) {
		$max_size = ( wp_attachment_is_image( $attachment_id ) ? 'max_image_size' : 'max_video_size' );
		$file     = get_attached_file( $attachment_id );
		// Get the file size to make sure it can exist in cloudinary.
		if ( file_exists( $file ) && filesize( $file ) < $this->plugin->components['connect']->usage[ $max_size ] ) {
			$this->add_to_sync( $attachment_id );
		} else {
			// Check if the src is a url.
			$file = get_post_meta( $attachment_id, '_wp_attached_file', true );
			if ( $this->plugin->components['media']->is_cloudinary_url( $file ) ) {
				// Download sync.
				$this->add_to_sync( $attachment_id );
			}
		}
	}

	/**
	 * Add an attachment ID to the to_sync array.
	 *
	 * @param int $attachment_id The attachment ID to add.
	 */
	public function add_to_sync( $attachment_id ) {
		if ( ! in_array( $attachment_id, $this->to_sync, true ) ) {
			// Flag image as pending to prevent duplicate upload.
			update_post_meta( $attachment_id, Sync::META_KEYS['pending'], time() );
			$this->to_sync[] = $attachment_id;
		}
	}

	/**
	 * Check if the attachment is pending an upload sync.
	 *
	 * @param int $attachment_id The attachment ID to check.
	 *
	 * @return bool
	 */
	public function is_pending( $attachment_id ) {
		// Check if it's not already in the to sync array.
		if ( ! in_array( $attachment_id, $this->to_sync, true ) ) {
			$is_pending = $this->plugin->components['media']->get_post_meta( $attachment_id, Sync::META_KEYS['pending'], true );
			if ( empty( $is_pending ) || $is_pending < time() - 5 * 60 ) {
				// No need to delete pending meta, since it will be updated with the new timestamp anyway.
				return false;
			}
		}

		return true;
	}

	/**
	 * Checks the status of the media item.
	 *
	 * @param array $status        Array of state and note.
	 * @param int   $attachment_id The attachment id.
	 *
	 * @return array
	 */
	public function filter_status( $status, $attachment_id ) {

		if ( $this->is_pending( $attachment_id ) ) {
			$status['state'] = 'warning';
			$status['note']  = esc_html__( 'Upload sync pending', 'cloudinary' );
		}

		// Check if there's an error.
		$has_error = $this->plugin->components['media']->get_post_meta( $attachment_id, Sync::META_KEYS['sync_error'], true );
		if ( ! empty( $has_error ) ) {
			$status['note']  = $has_error;
			$status['state'] = 'error';
		}

		return $status;
	}

	/**
	 * Initialize the background sync on requested images needing to be synced.
	 */
	public function init_background_upload() {
		if ( ! empty( $this->to_sync ) ) {
			$params = array(
				'attachment_ids' => $this->to_sync,
			);
			$this->plugin->components['api']->background_request( 'process', $params );
		}
	}
}
