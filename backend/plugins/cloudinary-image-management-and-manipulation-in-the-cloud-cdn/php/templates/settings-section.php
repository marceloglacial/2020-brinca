<?php
/**
 * Settings Page section template.
 *
 * @package Cloudinary
 */

$tab     = $this->get_tab(); // phpcs:ignore
$section = $this->setting_slug();
$classes = array(
	'settings-tab-section',
);
if ( ! empty( $tab['classes'] ) ) {
	$classes = array_merge( $classes, $tab['classes'] );
}
?>
<div class="<?php echo esc_attr( implode( ' ', $classes ) ); ?>" id="tab-<?php echo esc_attr( $tab['slug'] ); ?>">
	<div class="settings-tab-section-fields">
		<?php do_settings_sections( $section ); ?>
	</div>
</div>
