<?php
/**
 * Settings Page tabs template.
 *
 * @package Cloudinary
 */

$current_page = $this->get_page();
if ( empty( $current_page['tabs'] ) ) {
	return;
}
$nav_tabs    = $current_page['tabs'];
$config      = $this->plugin->config;
$active_tabs = array_filter(
	$nav_tabs,
	function ( $tab ) use ( $config ) {
		if ( ! empty( $tab['requires_config'] ) && empty( $config['connect'] ) ) {
			return false;
		}

		return true;
	}
);

?>
<?php if ( ! empty( $active_tabs ) && 1 < count( $active_tabs ) ) : ?>
	<h2 class="nav-tab-wrapper wp-clearfix">
		<?php foreach ( $active_tabs as $tab_slug => $tab_definition ) : ?>
			<a <?php $this->build_tab_attributes( $tab_slug ); ?>><?php echo esc_html( $tab_definition['title'] ); ?></a>
		<?php endforeach; ?>
	</h2>
<?php endif; ?>
