<?php
/**
 * Defines the tab structure for Cloudinary settings page.
 *
 * @package Cloudinary
 */

$struct = array(
	'heading'     => __( 'Welcome to Cloudinary!', 'cloudinary' ),
	'classes'     => array(
		'settings-tab-section-card',
		'cloudinary-welcome',
	),
	'assets'      => array(
		'style'  => array(
			'cld-player',
		),
		'script' => array(
			'cld-player',
		),
	),
	'hide_button' => true,
);

return apply_filters( 'cloudinary_admin_tab_dashboard', $struct );
