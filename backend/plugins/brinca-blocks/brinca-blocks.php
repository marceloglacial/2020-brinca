<?php
/*
Plugin Name: Brinca Blocks
Version: 0.1.1
Description: Custom blocks for Brinca Website
Author: Marcelo Freitas
Author URI: https://marceloglacial.com
*/

function brinca_register_block() {

	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	wp_register_script(
		'brinca-blocks',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	register_block_type( 'brinca/blocks', array(
		'editor_script' => 'brinca-blocks',
	) );

}
add_action( 'init', 'brinca_register_block' );
