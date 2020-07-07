<?php

// phpcs:disable
/**
 * Plugin Name: Gutenslider — The last WordPress slider you will ever need.
 * Plugin URI: https://gutenslider.org
 * Description: WordPress slider plugin for Gutenberg. Create an image slider, video slider, fullscreen slider with this powerful slider block and add any block on top. Slide anything!
 * Author: eedee
 * Author URI: https://eedee.net
 * Version: 4.0.4
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: eedee-gutenslider
 * Domain Path: /languages
 *
 * @package Gutenslider
 *
 */
// Exit if accessed directly.
if ( !defined( 'ABSPATH' ) ) {
    exit;
}
// Freemius Integration.

if ( function_exists( 'gutenslider_fs' ) ) {
    gutenslider_fs()->set_basename( false, __FILE__ );
} else {
    
    if ( !function_exists( 'gutenslider_fs' ) ) {
        /** Create a helper function for easy SDK access. **/
        function gutenslider_fs()
        {
            global  $gutenslider_fs ;
            
            if ( !isset( $gutenslider_fs ) ) {
                // Include Freemius SDK.
                require_once dirname( __FILE__ ) . '/freemius/start.php';
                $gutenslider_fs = fs_dynamic_init( array(
                    'id'             => '3804',
                    'slug'           => 'gutenslider',
                    'type'           => 'plugin',
                    'public_key'     => 'pk_b1382b7052729d6937e614cebce0a',
                    'is_premium'     => false,
                    'has_addons'     => false,
                    'has_paid_plans' => true,
                    'trial'          => array(
                    'days'               => 7,
                    'is_require_payment' => false,
                ),
                    'menu'           => array(
                    'slug'        => 'settings_page_gutenslider',
                    'contact'     => false,
                    'support'     => true,
                    'affiliation' => false,
                    'pricing'     => true,
                ),
                    'is_live'        => true,
                ) );
            }
            
            return $gutenslider_fs;
        }
        
        // Init Freemius.
        gutenslider_fs();
        // Signal that SDK was initiated.
        do_action( 'gutenslider_fs_loaded' );
    }

}

if ( !class_exists( 'Gutenslider' ) ) {
    /**
     * Main Gutenslider Class.
     *
     * @since 1.0.0
     */
    final class Gutenslider
    {
        /**
         * This plugin's instance.
         *
         * @var Gutenslider
         * @since 1.0.0
         */
        private static  $instance ;
        /**
         * Main Gutenslider Instance.
         *
         * Insures that only one instance of Gutenslider exists in memory at any one
         * time. Also prevents needing to define globals all over the place.
         *
         * @since 1.0.0
         * @static
         * @return object|Gutenslider The one true Gutenslider
         */
        public static function instance()
        {
            
            if ( !isset( self::$instance ) && !self::$instance instanceof Gutenslider ) {
                self::$instance = new Gutenslider();
                self::$instance->init();
                self::$instance->constants();
                self::$instance->asset_suffix();
                self::$instance->includes();
            }
            
            return self::$instance;
        }
        
        /**
         * Throw error on object clone.
         *
         * The whole idea of the singleton design pattern is that there is a single
         * object therefore, we don't want the object to be cloned.
         *
         * @since 1.0.0
         * @access protected
         * @return void
         */
        public function __clone()
        {
            // Cloning instances of the class is forbidden.
            _doing_it_wrong( __FUNCTION__, esc_html__( 'Cheating huh?', 'gutenslider' ), '1.0' );
        }
        
        /**
         * Disable unserializing of the class.
         *
         * @since 1.0.0
         * @access protected
         * @return void
         */
        public function __wakeup()
        {
            // Unserializing instances of the class is forbidden.
            _doing_it_wrong( __FUNCTION__, esc_html__( 'Cheating huh?', 'gutenslider' ), '1.0' );
        }
        
        /**
         * Setup plugin constants.
         *
         * @access private
         * @since 1.0.0
         * @return void
         */
        private function constants()
        {
            $this->define( 'GUTENSLIDER_VERSION', '1.12.0' );
            $this->define( 'GUTENSLIDER_HAS_PRO', false );
            $this->define( 'GUTENSLIDER_PLUGIN_NAME', 'Gutenslider' );
            $this->define( 'GUTENSLIDER_PLUGIN_SLUG', 'gutenslider' );
            $this->define( 'GUTENSLIDER_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
            $this->define( 'GUTENSLIDER_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
            $this->define( 'GUTENSLIDER_PLUGIN_FILE', __FILE__ );
            $this->define( 'GUTENSLIDER_PLUGIN_BASE', plugin_basename( __FILE__ ) );
            $this->define( 'GUTENSLIDER_REVIEW_URL', 'https://wordpress.org/support/plugin/gutenslider/reviews/#new-post' );
        }
        
        /**
         * Define constant if not already set.
         *
         * @param  string|string $name Name of the definition.
         * @param  string|bool   $value Default value.
         */
        private function define( $name, $value )
        {
            if ( !defined( $name ) ) {
                define( $name, $value );
            }
        }
        
        /**
         * Include required files.
         *
         * @access private
         * @since 1.0.0
         * @return void
         */
        private function includes()
        {
            require_once GUTENSLIDER_PLUGIN_DIR . 'src/init.php';
            if ( is_admin() || defined( 'WP_CLI' ) && WP_CLI ) {
                require_once GUTENSLIDER_PLUGIN_DIR . 'includes/admin/class-gutenslider-admin-start-page.php';
            }
        }
        
        /**
         * Load actions
         *
         * @return void
         */
        private function init()
        {
            add_action( 'plugins_loaded', array( $this, 'load_textdomain' ), 99 );
            add_action( 'enqueue_block_editor_assets', array( $this, 'block_localization' ) );
        }
        
        /**
         * Change the plugin's minified or src file name, based on debug mode.
         *
         * @since 1.0.0
         */
        public function asset_suffix()
        {
            $suffix = ( SCRIPT_DEBUG ? null : '.min' );
            $this->define( 'GUTENSLIDER_ASSET_SUFFIX', $suffix );
        }
        
        /**
         * If debug is on, serve unminified source assets.
         *
         * @since 1.0.0
         * @param string|string $type The type of resource.
         * @param string|string $directory Any extra directories needed.
         */
        public function asset_source( $type = 'js', $directory = null )
        {
            return GUTENSLIDER_PLUGIN_URL . 'dist';
        }
        
        /**
         * Loads the plugin language files.
         *
         * @access public
         * @since 1.0.0
         * @return void
         */
        public function load_textdomain()
        {
            load_plugin_textdomain( 'gutenslider', false, dirname( plugin_basename( GUTENSLIDER_PLUGIN_DIR ) ) . '/languages/' );
        }
        
        /**
         * Enqueue localization data for our blocks.
         *
         * @access public
         */
        public function block_localization()
        {
            if ( function_exists( 'wp_set_script_translations' ) ) {
                wp_set_script_translations( 'gutenslider-editor', 'gutenslider' );
            }
        }
    
    }
}
/**
 * The main function for that returns Gutenslider
 *
 * The main function responsible for returning the one true Gutenslider
 * Instance to functions everywhere.
 *
 * Use this function like you would a global variable, except without needing
 * to declare the global.
 *
 * Example: <?php $gutenslider = Gutenslider(); ?>
 *
 * @since 1.0.0
 * @return object|Gutenslider The one true Gutenslider Instance.
 */
if ( !function_exists( 'gutenslider' ) ) {
    /**
     * Get the one and only gutenslider
     *
     * @return Class Gutenslider
     */
    function gutenslider()
    {
        return Gutenslider::instance();
    }

}
// Get the plugin running. Load on plugins_loaded action to avoid issue on multisite.

if ( function_exists( 'is_multisite' ) && is_multisite() ) {
    add_action( 'plugins_loaded', 'gutenslider', 90 );
} else {
    gutenslider();
}
