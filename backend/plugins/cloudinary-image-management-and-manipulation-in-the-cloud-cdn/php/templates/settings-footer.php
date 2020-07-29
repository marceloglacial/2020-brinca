<?php
/**
 * Settings Page Footer template.
 *
 * @package Cloudinary
 */

$tab               = $this->get_tab(); // phpcs:ignore
$save_button_label = ! empty( $tab['save_button_label'] ) ? $tab['save_button_label'] : $this->ui['save_button_label'];
?>
	<?php if ( ! empty( $tab ) && empty( $tab['hide_button'] ) ) : ?>
		<p class="submit"><input type="submit" name="submit" id="submit" class="button button-primary" value="<?php echo esc_attr( $save_button_label ); ?>"></p>
	<?php endif; ?>
	</form>
</div>
