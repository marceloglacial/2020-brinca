<?php
/**
 * Interface for assets based classes.
 *
 * @package Cloudinary
 */

namespace Cloudinary\Component;

/**
 * Sets up methods used if this class uses scripts and styles.
 */
interface Assets {

	/**
	 * Register assets to be used for the class.
	 */
	public function register_assets();

	/**
	 * Enqueue Assets
	 */
	public function enqueue_assets();

	/**
	 * Check if this class is active.
	 *
	 * @return bool True if active False if not.
	 */
	public function is_active();
}
