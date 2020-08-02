<?php
/**
 * Defines the main settings page for Cloudinary.
 *
 * @package Cloudinary
 */

$definition = array(
	'page_title'        => __( 'Cloudinary', 'cloudinary' ),
	'menu_title'        => __( 'Cloudinary', 'cloudinary' ),
	'version'           => $this->plugin->version,
	'slug'              => 'cloudinary',
	'capability'        => 'manage_options',
	'save_button_label' => __( 'Save Settings', 'cloudinary' ),
	'pages'             => array(
		'dashboard'             => array(
			'page_title' => __( 'Cloudinary Dashboard', 'cloudinary' ),
			'menu_title' => __( 'Dashboard', 'cloudinary' ),
			'slug'       => 'cloudinary',
			'asset_init' => array( '\Cloudinary\Media\Video', 'register_scripts_styles' ),
			'tabs'       => array(
				'dashboard',
			),
		),
		'connect'               => array(
			'page_title' => __( 'Cloudinary Connection', 'cloudinary' ),
			'menu_title' => __( 'Connect', 'cloudinary' ),
			'slug'       => 'cld_connect',
			'tabs'       => array(
				'connect',
			),
		),
		'global_transformation' => array(
			'page_title'      => __( 'Global Transformations Settings', 'cloudinary' ),
			'menu_title'      => __( 'Global Transformations', 'cloudinary' ),
			'slug'            => 'cld_global_transformation',
			'requires_config' => true,
			'tabs'            => array(
				'global_transformations',
				'global_video_transformations',
			),
		),
		'sync_media'            => array(
			'page_title'      => __( 'Sync Media to Cloudinary', 'cloudinary' ),
			'menu_title'      => __( 'Sync Media', 'cloudinary' ),
			'slug'            => 'cld_sync_media',
			'requires_config' => true,
			'tabs'            => array(
				'sync_media',
			),
		),
	),
);

return $definition;
