<?php
/**
 * Defines the tab structure for Cloudinary general settings.
 *
 * @package Cloudinary
 */

$struct = array(
	'title'             => __( 'General', 'cloudinary' ),
	'description'       => __( 'General settings for Cloudinary', 'cloudinary' ),
	'save_button_label' => __( 'Save Settings', 'cloudinary' ),
	'success_notice'    => __( 'General Settings have been updated.', 'cloudinary' ),
);

return apply_filters( 'cloudinary_admin_tab_sync_media', $struct );
