<?php
/**
 * Defines the tab structure for Cloudinary settings page.
 *
 * @package Cloudinary
 */

$struct = array(
	'title'       => __( 'Connect', 'cloudinary' ),
	'description' => __( 'Connect your Cloudinary account to WordPress', 'cloudinary' ),
	'hide_button' => true,
	'classes'     => array(
		'connect',
	),
	'fields'      => array(
		'cloudinary_url' => array(
			'label'       => __( 'Environment variable URL', 'cloudinary' ),
			'placeholder' => 'cloudinary://API_KEY:API_SECRET@CLOUD_NAME',
			'required'    => true,
			'suffix'      => '<button type="submit" class="button button-primary"><span class="dashicons dashicons-admin-plugins"></span> ' . __( 'Save connection', 'cloudinary' ) . '</button>',
		),
		'signup'         => array(
			'label'    => null,
			'type'     => 'custom',
			'callback' => function () {
				if ( empty( Cloudinary\get_plugin_instance()->config['connect'] ) ) {
					esc_html_e( "Don't have an account?", 'cloudinary' ); ?>
					<a href="https://cloudinary.com/users/register/free" target="_blank" class="button sign-up"><?php esc_html_e( 'Sign up Free', 'cloudinary' ); ?></a>
					<?php
				}
			},
		),
	),
);

return apply_filters( 'cloudinary_admin_tab_connect', $struct );
