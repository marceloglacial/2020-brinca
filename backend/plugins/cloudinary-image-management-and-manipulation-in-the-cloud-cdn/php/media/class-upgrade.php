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
	 * Filter constructor.
	 *
	 * @param \Cloudinary\Media $media The plugin.
	 */
	public function __construct( \Cloudinary\Media $media ) {
		$this->media = $media;
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
			$meta      = wp_get_attachment_metadata( $attachment_id );
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
		}

		return $cloudinary_id;
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

		return $public_id;
	}

	/**
	 * Setup hooks for the filters.
	 */
	public function setup_hooks() {
		add_filter( 'cloudinary_id', array( $this, 'check_cloudinary_version' ), 10, 2 ); // Priority 10, to allow prep_on_demand_upload.

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
	}
}
