<?php
/**
 * Instantiates the Cloudinary plugin
 *
 * @package Cloudinary
 */

namespace Cloudinary;

global $cloudinary_plugin;

if ( ! defined( 'DEBUG_SCRIPTS' ) ) {
	define( 'CLDN_ASSET_DEBUG', '.min' );
} else {
	define( 'CLDN_ASSET_DEBUG', '' );
}

require_once __DIR__ . '/php/class-plugin.php';

$cloudinary_plugin = new Plugin();

/**
 * Cloudinary Plugin Instance
 *
 * @return Plugin
 */
function get_plugin_instance() {
	global $cloudinary_plugin;

	return $cloudinary_plugin;
}
