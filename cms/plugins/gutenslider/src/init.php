<?php

/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package Gutenslider
 */
// Exit if accessed directly.
if ( !defined( 'ABSPATH' ) ) {
    exit;
}

if ( !function_exists( 'eedee_gutenslider_activation' ) ) {
    /**
     * Check if free / pro version is active on activation and deactivate in case
     */
    function eedee_gutenslider_activation()
    {
        if ( is_plugin_active( 'gutenslider/eedee-gutenslider.php' ) ) {
            deactivate_plugins( 'gutenslider/eedee-gutenslider.php' );
        }
        if ( is_plugin_active( 'gutenslider-premium/eedee-gutenslider.php' ) ) {
            deactivate_plugins( 'gutenslider-premium/eedee-gutenslider.php' );
        }
    }
    
    register_activation_hook( __FILE__, 'eedee_gutenslider_activation' );
}

if ( !function_exists( 'eedee_gutenslider_block_assets' ) ) {
    /**
     * Enqueue Gutenberg block assets for both frontend + backend.
     *
     * Assets enqueued:
     * 1. blocks.style.build.css - Frontend + Backend.
     * 2. blocks.build.js - Backend.
     * 3. blocks.editor.build.css - Backend.
     *
     * @uses {wp-blocks} for block type registration & related functions.
     * @uses {wp-element} for WP Element abstraction — structure of blocks.
     * @uses {wp-i18n} to internationalize the block's text.
     * @uses {wp-editor} for WP editor styles.
     * @since 1.0.0
     */
    function eedee_gutenslider_block_assets()
    {
        // phpcs:ignore
        include_once 'blocks/gutenslider/block-front.php';
        include_once 'blocks/gutenslider/attributes.php';
        // Register block styles for both frontend + backend.
        wp_register_style(
            'eedee-gutenslider-style-css',
            // Handle.
            plugins_url( 'dist/gutenslider-blocks.style.build.css', dirname( __FILE__ ) ),
            // Block style CSS.
            array(),
            // Dependency to include the CSS after it.
            filemtime( plugin_dir_path( __DIR__ ) . 'dist/gutenslider-blocks.style.build.css' )
        );
        wp_register_style(
            'eedee-gutenslider-slick-css',
            // Handle.
            plugins_url( 'src/vendor/slick/slick.css', dirname( __FILE__ ) ),
            // Block style CSS.
            array(),
            // Dependency to include the CSS after it.
            filemtime( plugin_dir_path( __DIR__ ) . 'src/vendor/slick/slick.css' )
        );
        wp_register_style(
            'eedee-gutenslider-slick-theme-css',
            // Handle.
            plugins_url( 'src/vendor/slick/slick-theme.css', dirname( __FILE__ ) ),
            // Block style CSS.
            array(),
            // Dependency to include the CSS after it.
            filemtime( plugin_dir_path( __DIR__ ) . 'src/vendor/slick/slick-theme.css' )
        );
        wp_register_script(
            'eedee-gutenslider-slick-js',
            plugins_url( '/src/vendor/slick/slick.min.js', dirname( __FILE__ ) ),
            array( 'jquery' ),
            filemtime( plugin_dir_path( __DIR__ ) . '/src/vendor/slick/slick.min.js' ),
            true
        );
        wp_register_script(
            'eedee-gutenslider-js',
            plugins_url( '/dist/gutenslider.js', dirname( __FILE__ ) ),
            array( 'jquery', 'eedee-gutenslider-slick-js' ),
            filemtime( plugin_dir_path( __DIR__ ) . '/dist/gutenslider.js' ),
            true
        );
        // Register block editor script for backend.
        wp_register_script(
            'eedee-gutenslider-block-js',
            // Handle.
            plugins_url( '/dist/gutenslider-blocks.build.js', dirname( __FILE__ ) ),
            // Block.build.js: We register the block here. Built with Webpack.
            array(
                'wp-blocks',
                'wp-i18n',
                'wp-element',
                'wp-data'
            ),
            // Dependencies, defined above.
            filemtime( plugin_dir_path( __DIR__ ) . 'dist/gutenslider-blocks.build.js' ),
            // Version: filemtime — Gets file modification time.
            true
        );
        // Register block editor styles for backend.
        wp_register_style(
            'eedee-gutenslider-block-editor-css',
            // Handle.
            plugins_url( 'dist/gutenslider-blocks.editor.build.css', dirname( __FILE__ ) ),
            // Block editor CSS.
            array( 'wp-edit-blocks' ),
            // Dependency to include the CSS after it.
            filemtime( plugin_dir_path( __DIR__ ) . 'dist/gutenslider-blocks.editor.build.css' )
        );
        $editor_script = 'eedee-gutenslider-block-js';
        $scripts = [ 'eedee-gutenslider-slick-js', 'eedee-gutenslider-js' ];
        $eedee_gutenslider_block_variables = array(
            'siteUrl' => get_site_url(),
        );
        wp_localize_script( 'eedee-gutenslider-block-js', 'eedeeGutenslider', $eedee_gutenslider_block_variables );
        wp_localize_script( 'eedee-gutenslider-block-pro-js', 'eedeeGutenslider', $eedee_gutenslider_block_variables );
        if ( function_exists( 'register_block_type' ) ) {
            register_block_type( 'eedee/block-gutenslider', array(
                'attributes'      => $gutenslider_attributes,
                'style'           => [
                'eedee-gutenslider-style-css',
                'eedee-gutenslider-slick-css',
                'eedee-gutenslider-slick-theme-css',
                'dashicons'
            ],
                'script'          => $scripts,
                'editor_script'   => $editor_script,
                'editor_style'    => 'eedee-gutenslider-block-editor-css',
                'render_callback' => 'eedee_gutenslider_dynamic_render_callback',
            ) );
        }
    }

}
if ( !function_exists( 'eedee_remove_max_srcset_image_width' ) ) {
    /**
     * Remove the max width filter for responsive images srcset
     *
     * @param number $max_width e max width (default 1600px).
     */
    function eedee_remove_max_srcset_image_width( $max_width )
    {
        return false;
    }

}
add_filter( 'max_srcset_image_width', 'eedee_remove_max_srcset_image_width' );
if ( !function_exists( 'eedee_gutenslider_load_textdomain' ) ) {
    /**
     * Load Plugin i18n
     */
    function eedee_gutenslider_load_textdomain()
    {
        load_plugin_textdomain( 'eedee-gutenslider', false, dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/' );
    }

}
add_image_size( 'xl', 1600, 9999 );
add_image_size( 'xxl', 2200, 9999 );
add_image_size( 'xxxl', 2800, 9999 );
add_image_size( 'xxxxl', 3400, 9999 );
add_image_size( 'xxxxxl', 4000, 9999 );
// Hook: Block assets.
add_action( 'init', 'eedee_gutenslider_block_assets' );
add_action( 'plugins_loaded', 'eedee_gutenslider_load_textdomain' );