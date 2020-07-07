<?php
/**
 * Create a Getting Started page that fires after plugin activation
 *
 * @package Gutenslider
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Gutenslider_Getting_Started_Page Class
 */
class Gutenslider_Admin_Start_Page {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'admin_menu', array( $this, 'admin_menu' ) );
		add_action( 'activated_plugin', array( $this, 'redirect' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'load_style' ), 100 );
	}

	/**
	 * Setup the admin menu.
	 */
	public function admin_menu() {

		/**
		 * Allow users to nest the Gutenslider menu page
		 *
		 * @var string
		 */
		$submenu_parent_slug = (string) apply_filters( 'gutenslider_getting_started_submenu_parent_slug', '' );

		// if ( '' !== $submenu_parent_slug ) {
		//
		// 	add_menu_page(
		// 		$submenu_parent_slug,
		// 		__( 'Gutenslider', 'gutenslider' ),
		// 		__( 'Gutenslider', 'gutenslider' ),
		// 		apply_filters( 'gutenslider_getting_started_screen_capability', 'manage_options' ),
		// 		'gutenslider-getting-started',
		// 		array( $this, 'content' )
		// 	);
		//
		// 	return;
		//
		// }

		add_menu_page(
			__( 'Gutenslider', 'gutenslider' ),
			__( 'Gutenslider', 'gutenslider' ),
			'manage_options',
			'settings_page_gutenslider',
			[ $this, 'render' ],
			"data:image/svg+xml,%3Csvg width='26px' height='18px' viewBox='0 0 26 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' role='img' aria-hidden='true' focusable='false'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none'%3E%3Cg id='image' transform='translate(0.000000, -3.000000)'%3E%3Cpolygon id='Path' points='1 0 25 0 25 24 1 24'%3E%3C/polygon%3E%3Cpath d='M20,5 L20,19 L6,19 L6,5 L20,5 L20,5 Z M20,3 L6,3 C4.9,3 4,3.9 4,5 L4,19 C4,20.1 4.9,21 6,21 L20,21 C21.1,21 22,20.1 22,19 L22,5 C22,3.9 21.1,3 20,3 Z' id='Shape' fill='%23ece6f6' fill-rule='nonzero'%3E%3C/path%3E%3Cpolygon id='Path' fill='%23ece6f6' fill-rule='nonzero' points='15.14 12 12.14 15.7645914 10 13.2451362 7 17 19 17'%3E%3C/polygon%3E%3Crect id='Rectangle' stroke='%23803d97' fill='%23ece6f6' x='7.5' y='7.5' width='10' height='1' rx='0.5'%3E%3C/rect%3E%3Crect id='Rectangle' fill='%23ece6f6' x='7' y='9' width='12' height='1'%3E%3C/rect%3E%3Crect id='Rectangle' fill='%23ece6f6' x='7' y='7' width='12' height='1'%3E%3C/rect%3E%3Cpolygon id='Triangle' fill='%23ece6f6' transform='translate(24.500000, 12.000000) rotate(-270.000000) translate(-24.500000, -12.000000) ' points='24.5 10.5 27.5 13.5 21.5 13.5'%3E%3C/polygon%3E%3Cpolygon id='Triangle' fill='%23ece6f6' transform='translate(1.500000, 12.000000) rotate(-90.000000) translate(-1.500000, -12.000000) ' points='1.5 10.5 4.5 13.5 -1.5 13.5'%3E%3C/polygon%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
		);
	}

	/**
	 * Render the view using MVC pattern.
	 */
	public function render() {
		$heading = GUTENSLIDER_PLUGIN_NAME;

		// View.
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/partials/view.php';
	}

	/**
	 * Load Scripts
	 *
	 * Enqueues the required scripts.
	 *
	 * @return void
	 */
	public function load_style() {

		global $wp_query;

		$screen    = get_current_screen();
		$screen_id = $screen ? $screen->id : '';

		// Only enqueue admin scripts and styles on relevant pages.
		if ( false !== strpos( $screen_id, 'settings_page_gutenslider' ) ) {

			// Define where the assets are loaded from.
			$dir = Gutenslider()->asset_source( 'dist' );

			wp_enqueue_style(
				'gutenslider-getting-started',
				$dir . '/gutenslider-admin.build.css',
				GUTENSLIDER_VERSION,
				true
			);

			wp_enqueue_script(
				'gutenslider-admin-js',
				$dir . '/gutenslider-admin.build.js',
				array(),
				GUTENSLIDER_VERSION,
				true
			);
		}

	}

	/**
	 * Redirect to the Getting Started page upon plugin activation.
	 *
	 * @param string $plugin The activate plugin name.
	 */
	public function redirect( $plugin ) {

		if ( 'gutenslider/class-gutenslider.php' !== $plugin ) {

			return;

		}

		$nonce          = filter_input( INPUT_GET, '_wpnonce', FILTER_SANITIZE_STRING );
		$activate_multi = filter_input( INPUT_GET, 'activate-multi', FILTER_VALIDATE_BOOLEAN );

		if ( ! $nonce ) {

			return;

		}

		if ( defined( 'WP_CLI' ) && WP_CLI ) {

			WP_CLI::log(
				WP_CLI::colorize(
					'%b' . sprintf( '🎉 %s %s', __( 'Get started with Gutenslider here:', 'gutenslider' ), admin_url( 'admin.php?page=gutenslider-getting-started' ) ) . '%n'
				)
			);

			return;

		}

		if ( $activate_multi ) {

			return;

		}

		wp_safe_redirect( admin_url( 'admin.php?page=gutenslider-getting-started' ) );

		die();

	}
}

return new Gutenslider_Admin_Start_Page();
