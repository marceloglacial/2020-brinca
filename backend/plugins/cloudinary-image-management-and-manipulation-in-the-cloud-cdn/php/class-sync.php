<?php
/**
 * Sync manages all of the sync components for the Cloudinary plugin.
 *
 * @package Cloudinary
 */

namespace Cloudinary;

use Cloudinary\Component\Assets;
use Cloudinary\Component\Setup;
use Cloudinary\Sync\Delete_Sync;
use Cloudinary\Sync\Download_Sync;
use Cloudinary\Sync\Push_Sync;
use Cloudinary\Sync\Upload_Queue;
use Cloudinary\Sync\Upload_Sync;

/**
 * Class Sync
 */
class Sync implements Setup, Assets {

	/**
	 * Holds the plugin instance.
	 *
	 * @since   0.1
	 *
	 * @var     Plugin Instance of the global plugin.
	 */
	public $plugin;

	/**
	 * Contains all the different sync components.
	 *
	 * @var array A collection of sync components.
	 */
	public $managers;

	/**
	 * Holds the meta keys for sync meta to maintain consistency.
	 */
	const META_KEYS = array(
		'pending'        => '_cloudinary_pending',
		'signature'      => '_sync_signature',
		'version'        => '_cloudinary_version',
		'breakpoints'    => '_cloudinary_breakpoints',
		'public_id'      => '_public_id',
		'transformation' => '_transformations',
		'sync_error'     => '_sync_error',
		'cloudinary'     => '_cloudinary_v2',
		'folder_sync'    => '_folder_sync',
		'syncing'        => '_cloudinary_syncing',
		'downloading'    => '_cloudinary_downloading',
	);

	/**
	 * Push_Sync constructor.
	 *
	 * @param Plugin $plugin Global instance of the main plugin.
	 */
	public function __construct( Plugin $plugin ) {
		$this->plugin               = $plugin;
		$this->managers['push']     = new Push_Sync( $this->plugin );
		$this->managers['upload']   = new Upload_Sync( $this->plugin );
		$this->managers['download'] = new Download_Sync( $this->plugin );
		$this->managers['delete']   = new Delete_Sync( $this->plugin );
		$this->managers['queue']    = new Upload_Queue( $this->plugin );
	}

	/**
	 * Setup assets/scripts.
	 */
	public function enqueue_assets() {
		if ( $this->plugin->config['connect'] ) {
			$data = array(
				'restUrl' => esc_url_raw( rest_url() ),
				'nonce'   => wp_create_nonce( 'wp_rest' ),
			);
			wp_add_inline_script( 'cloudinary', 'var cloudinaryApi = ' . wp_json_encode( $data ), 'before' );
		}
	}

	/**
	 * Register Assets.
	 */
	public function register_assets() {
	}


	/**
	 * Is the component Active.
	 */
	public function is_active() {
		return $this->plugin->components['settings']->is_active() && 'sync_media' === $this->plugin->components['settings']->active_tab();
	}

	/**
	 * Checks if an asset is synced and up to date.
	 *
	 * @param int $post_id The post id to check.
	 *
	 * @return bool
	 */
	public function is_synced( $post_id ) {
		$signature = $this->get_signature( $post_id );
		$expecting = $this->generate_signature( $post_id );

		if ( ! empty( $signature ) && ! empty( $expecting ) && $expecting === $signature ) {
			return true;
		}

		if ( $this->plugin->components['settings']->is_auto_sync_enabled() && apply_filters( 'cloudinary_flag_sync', '__return_false' ) && ! get_post_meta( $post_id, Sync::META_KEYS['downloading'], true ) ) {
			update_post_meta( $post_id, Sync::META_KEYS['syncing'], true );
		}

		return false;
	}

	/**
	 * Generate a signature based on whats required for a full sync.
	 *
	 * @param int $post_id The post id to generate a signature for.
	 *
	 * @return string|bool
	 */
	public function generate_signature( $post_id ) {
		$upload = $this->managers['push']->prepare_upload( $post_id );
		// Check if has an error (ususally due to file quotas).
		if ( is_wp_error( $upload ) ) {
			$this->plugin->components['media']->get_post_meta( $post_id, self::META_KEYS['sync_error'], $upload->get_error_message() );

			return false;
		}
		$credentials          = $this->plugin->components['connect']->get_credentials();
		$upload['cloud_name'] = $credentials['cloud_name'];
		$return               = array_map(
			function ( $item ) {
				if ( is_array( $item ) ) {
					$item = wp_json_encode( $item );
				}

				return md5( $item );
			},
			$upload
		);

		return $return;
	}

	/**
	 * Get the current sync signature of an asset.
	 *
	 * @param int $post_id The post ID.
	 *
	 * @return array|bool
	 */
	public function get_signature( $post_id ) {
		static $signatures = array(); // Cache signatures already fetched.

		$return = false;
		if ( ! empty( $signatures[ $post_id ] ) ) {
			$return = $signatures[ $post_id ];
		} else {
			$signature = $this->plugin->components['media']->get_post_meta( $post_id, self::META_KEYS['signature'], true );
			if ( ! empty( $signature ) ) {
				$base_signatures        = $this->generate_signature( $post_id );
				$signatures[ $post_id ] = wp_parse_args( $signature, $base_signatures );
				$return                 = $signatures[ $post_id ];
			}
		}

		return $return;
	}

	/**
	 * Additional component setup.
	 */
	public function setup() {
		if ( $this->plugin->config['connect'] ) {
			$this->managers['upload']->setup();
			$this->managers['delete']->setup();
		}
	}
}
