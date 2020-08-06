<?php
/**
 * Upgrades from a Legecy version of Cloudinary.
 *
 * @package Cloudinary
 */

namespace Cloudinary\Media;

use Cloudinary\Sync;

/**
 * Class Filter.
 *
 * Handles filtering of HTML content.
 */
class Upgrade {

	/**
	 * Holds the Media instance.
	 *
	 * @since   0.1
	 *
	 * @var     \Cloudinary\Media Instance of the plugin.
	 */
	private $media;

	/**
	 * Holds the Sync instance.
	 *
	 * @since   0.1
	 *
	 * @var     \Cloudinary\Sync Instance of the plugin.
	 */
	private $sync;

	/**
	 * The cron frequency to ensure that the queue is progressing.
	 *
	 * @var int
	 */
	protected $cron_frequency;

	/**
	 * The cron offset since the last update.
	 *
	 * @var int
	 */
	protected $cron_start_offset;

	/**
	 * Filter constructor.
	 *
	 * @param \Cloudinary\Media $media The plugin.
	 */
	public function __construct( \Cloudinary\Media $media ) {
		$this->media = $media;
		$this->sync  = $media->plugin->components['sync'];

		$this->cron_frequency    = apply_filters( 'cloudinary_cron_frequency', 600 );
		$this->cron_start_offset = apply_filters( 'cloudinary_cron_start_offset', 60 );

		$this->setup_hooks();
	}

	/**
	 * Check's if an attachment is from a previous version of Cloudinary.
	 *
	 * @param string|bool $cloudinary_id The cloudinary ID. Should be false.
	 * @param int         $attachment_id The attachment ID to convert.
	 *
	 * @return string|bool
	 */
	public function check_cloudinary_version( $cloudinary_id, $attachment_id ) {

		if ( false === $cloudinary_id ) {
			// Backwards compat.
			$meta = wp_get_attachment_metadata( $attachment_id );
			if ( ! empty( $meta[ Sync::META_KEYS['cloudinary'] ] ) ) {
				return $cloudinary_id; // Current version.
			}
			$public_id = $this->media->get_post_meta( $attachment_id, Sync::META_KEYS['public_id'], true );

			/*
			 * If we still have $meta['cloudinary'] but already have $public_id, then conversion process is already underway.
			 * In that case, don't call convert_cloudinary_version() again, since it would make a duplicate background_request.
			 */
			if ( ! empty( $meta['cloudinary'] ) && empty( $public_id ) ) {
				$cloudinary_id = $this->convert_cloudinary_version( $attachment_id );
			} elseif ( ! empty( $public_id ) ) {
				// Has public ID, but not  fully down synced.
				$cloudinary_id = $public_id;
			}
		} else {
			// Backwards compat.
			$folder_sync = $this->media->get_post_meta( $attachment_id, Sync::META_KEYS['folder_sync'], true );
			if ( 0 === strlen( $folder_sync ) ) {
				// Does not exist, add it to be compatible with v1.2.2.
				$public_id = $this->media->get_post_meta( $attachment_id, Sync::META_KEYS['public_id'], true );
				// Set the folder sync to 0 to flag it by default as not synced.
				$this->media->update_post_meta( $attachment_id, Sync::META_KEYS['folder_sync'], '0' );
				if ( false !== strpos( $public_id, '/' ) ) {
					$path              = pathinfo( $public_id );
					$asset_folder      = trailingslashit( $path['dirname'] );
					$cloudinary_folder = trailingslashit( $this->media->plugin->config['settings']['sync_media']['cloudinary_folder'] );
					if ( $asset_folder === $cloudinary_folder ) {
						// The asset folder matches the defined cloudinary folder, flag it as being in a folder sync.
						$this->media->update_post_meta( $attachment_id, Sync::META_KEYS['folder_sync'], '1' );
					}
				}
			}
		}

		return $cloudinary_id;
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

		if ( get_post_meta( $attachment_id, Sync::META_KEYS['downloading'] ) ) {
			$status['state'] = 'info downloading';
			$status['note']  = __( 'Downloading', 'cloudinary' );
		}

		if ( get_post_meta( $attachment_id, Sync::META_KEYS['syncing'] ) ) {
			$status['state'] = 'info syncing';
			$status['note']  = __( 'Syncing metadata', 'cloudinary' );
		}

		return $status;
	}

	/**
	 * Convert an image post that was created from Cloudinary v1.
	 *
	 * @param int $attachment_id The attachment ID to convert.
	 *
	 * @return string Cloudinary ID
	 */
	public function convert_cloudinary_version( $attachment_id ) {

		$file  = get_post_meta( $attachment_id, '_wp_attached_file', true );
		$path  = wp_parse_url( $file, PHP_URL_PATH );
		$media = $this->media;
		$parts = explode( '/', $path );
		$parts = array_map(
			function ( $val ) use ( $media ) {
				if ( empty( $val ) ) {
					return false;
				}
				if ( $val === $media->credentials['cloud_name'] ) {
					return false;
				}
				if ( in_array( $val, [ 'image', 'video', 'upload' ], true ) ) {
					return false;
				}
				$transformation_maybe = $media->get_transformations_from_string( $val );
				if ( ! empty( $transformation_maybe ) ) {
					return false;
				}
				if ( substr( $val, 0, 1 ) === 'v' && is_numeric( substr( $val, 1 ) ) ) {
					return false;
				}

				return $val;
			},
			$parts
		);
		// Build public_id.
		$parts     = array_filter( $parts );
		$public_id = implode( '/', $parts );
		// Remove extension.
		$path      = pathinfo( $public_id );
		$public_id = strstr( $public_id, '.' . $path['extension'], true );
		$this->media->update_post_meta( $attachment_id, Sync::META_KEYS['public_id'], $public_id );

		// Flag the download
		update_post_meta( $attachment_id, Sync::META_KEYS['downloading'], true );
		delete_post_meta( $attachment_id, Sync::META_KEYS['syncing'] );

		if ( ! wp_next_scheduled( 'cloudinary_resume_upgrade' ) ) {
			wp_schedule_single_event( time() + $this->cron_frequency, 'cloudinary_resume_upgrade' );
		}

		if ( ! defined( 'DOING_BULK_SYNC' ) ) {
			$this->sync->managers['upload']->add_to_sync( $attachment_id ); // Auto sync if upgrading outside of bulk sync.
		}

		return $public_id;
	}

	/**
	 * Maybe resume the upgrading assets.
	 * This is a fallback mechanism to resume the upgrade when it stops unexpectedly.
	 *
	 * @return void
	 */
	public function maybe_resume_upgrade() {
		global $wpdb;

		$assets = $wpdb->get_col( // phpcs:ignore WordPress.DB.DirectDatabaseQuery
			$wpdb->prepare(
				"SELECT post_id
				FROM $wpdb->postmeta
				WHERE meta_key = %s",
				Sync::META_KEYS['downloading']
			)
		);

		if ( ! empty( $assets ) ) {
			wp_schedule_single_event( time() + $this->cron_frequency, 'cloudinary_resume_upgrade' );

			foreach ( $assets as $asset ) {
				$this->sync->managers['upload']->add_to_sync( $asset );
			}
		}
	}

	/**
	 * Setup hooks for the filters.
	 */
	public function setup_hooks() {
		add_filter( 'validate_cloudinary_id', array( $this, 'check_cloudinary_version' ), 10, 2 ); // Priority 10, to allow prep_on_demand_upload.

		// Show sync status.
		add_filter( 'cloudinary_media_status', array( $this, 'filter_status' ), 20, 2 );

		// Add a redirection to the new plugin settings, from the old plugin.
		if ( is_admin() ) {
			add_action( 'admin_menu', function () {
				global $plugin_page;
				if ( ! empty( $plugin_page ) && false !== strpos( $plugin_page, 'cloudinary-image-management-and-manipulation-in-the-cloud-cdn' ) ) {
					wp_safe_redirect( admin_url( '?page=cloudinary' ) );
					die;
				}
			} );
		}

		add_action( 'cloudinary_resume_upgrade', array( $this, 'maybe_resume_upgrade' ) );
	}
}
