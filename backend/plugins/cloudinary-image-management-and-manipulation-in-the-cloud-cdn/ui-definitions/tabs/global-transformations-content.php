<?php
/**
 * The global transformations settings tab HTML.
 *
 * @package Cloudinary
 */

wp_add_inline_script( 'cloudinary', 'var CLD_GLOBAL_TRANSFORMATIONS = CLD_GLOBAL_TRANSFORMATIONS ? CLD_GLOBAL_TRANSFORMATIONS : {};', 'before' );
?>
<p><?php esc_html_e( 'Define the global (default) transformations to be applied to all images. You can override these transformations with transformations applied at category, tag or individual level. See documentation for more information.', 'cloudinary' ); ?></p>
<div class="settings-tab-section-card pull-right">
	<h3><?php esc_html_e( 'Preview', 'cloudinary' ); ?></h3>
	<?php
	\Cloudinary\get_plugin_instance()->components['media']->global_transformations->load_preview();
	?>
</div>
