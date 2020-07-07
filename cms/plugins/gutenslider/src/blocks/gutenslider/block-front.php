<?php
/**
 * Gutenslider Dynamic Render Callback *
 *
 * @since   3.0.0
 * @package Gutenslider
 */

if ( ! function_exists( 'eedee_gutenslider_dynamic_render_callback' ) ) {
	/**
	 * Register Gutenberg block template that is rendered on server side
	 *
	 * @param Array  $attr are the attributes from the block.
	 * @param String $inner_content the content of gutensliders innerBlocks.
	 * @link  https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @uses  {save} the content returned from the save function of Gutenslider block.
	 * @since 1.16.0
	 */
	function eedee_gutenslider_dynamic_render_callback( $attr, $inner_content ) {
		$class = sprintf(
			'wp-block-eedee-block-gutenslider content-%1$s',
			$attr['contentMode']
		);
		if ( isset( $attr['align'] ) ) {
			$class .= ' align' . $attr['align'];
		}
		if ( isset( $attr['isFullScreen'] ) && $attr['isFullScreen'] ) {
			$class .= ' is-full';
		}
		if ( isset( $attr['isFullScreen'] )
			&& ! $attr['isFullScreen']
			&& isset( $attr['parallax'] )
			&& $attr['parallax'] ) {
				$class .= ' is-full';
		}
		if ( isset( $attr['hasParallax'] ) && $attr['hasParallax'] ) {
			$class .= ' has-parallax';
		}
		if ( isset( $attr['arrowStyle'] ) && $attr['arrowStyle'] ) {
			$class .= ' ' . $attr['arrowStyle'];
		}
		if ( isset( $attr['dotStyle'] ) && $attr['dotStyle'] ) {
			$class .= ' ' . $attr['dotStyle'];
		}
		if ( isset( $attr['className'] ) ) {
			$class .= ' ' . $attr['className'];
		}
		if ( isset( $attr['verticalAlign'] ) ) {
			$class .= ' vertical-align-' . $attr['verticalAlign'];
		}
		if ( isset( $attr['visibleOnDesktop'] ) && ! $attr['visibleOnDesktop'] ) {
			$class .= ' ed-desktop-hidden';
		}
		if ( isset( $attr['visibleOnTablet'] ) && ! $attr['visibleOnTablet'] ) {
			$class .= ' ed-tablet-hidden';
		}
		if ( isset( $attr['visibleOnMobile'] ) && ! $attr['visibleOnMobile'] ) {
			$class .= ' ed-mobile-hidden';
		}

		$bg_image = null;
		if ( isset( $attr['bgImageId'] ) ) {
			$bg_image = wp_get_attachment_image_src( $attr['bgImageId'], 'medium' )[0];
		}

		$component_style = sprintf(
			'--gutenslider-min-height: %1$s;'
			. '--gutenslider-arrow-size: %2$spx;'
			. '--gutenslider-dot-size: %3$spx;'
			. '--gutenslider-arrow-color: %4$s;'
			. '--gutenslider-dot-color: %5$s;'
			. '--gutenslider-padding-y-mobile: %6$s%12$s;'
			. '--gutenslider-padding-x-mobile: %7$s%13$s;'
			. '--gutenslider-padding-y-tablet: %8$s%12$s;'
			. '--gutenslider-padding-x-tablet: %9$s%13$s;'
			. '--gutenslider-padding-y-desktop: %10$s%12$s;'
			. '--gutenslider-padding-x-desktop: %11$s%13$s;'
			. '--gutenslider-bg-image: url(%14$s);'
			. '--gutenslider-min-height-md: %15$s;'
			. '--gutenslider-min-height-sm: %16$s;'
			. '--gutenslider-padding-x: %17$s;'
			. '--gutenslider-padding-x-md: %18$s;'
			. '--gutenslider-padding-x-sm: %19$s;'
			. '--gutenslider-padding-y: %20$s;'
			. '--gutenslider-padding-y-md: %21$s;'
			. '--gutenslider-padding-y-sm: %22$s;'
			. '--gutenslider-arrow-size-md: %23$spx;'
			. '--gutenslider-arrow-size-sm: %24$spx;'
			. '--gutenslider-dot-size-md: %25$spx;'
			. '--gutenslider-dot-size-sm: %26$spx;',
			$attr['sliderHeight'],
			$attr['arrowSize'],
			$attr['dotSize'],
			$attr['arrowColor'],
			$attr['dotColor'],
			$attr['spacingYMobile'],
			$attr['spacingXMobile'],
			$attr['spacingYTablet'],
			$attr['spacingXTablet'],
			$attr['spacingYDesktop'],
			$attr['spacingXDesktop'],
			$attr['spacingYUnit'],
			$attr['spacingXUnit'],
			$bg_image,
			$attr['sliderHeightMd'],
			$attr['sliderHeightSm'],
			$attr['paddingX'],
			$attr['paddingXMd'],
			$attr['paddingXSm'],
			$attr['paddingY'],
			$attr['paddingYMd'],
			$attr['paddingYSm'],
			$attr['arrowSizeMd'],
			$attr['arrowSizeSm'],
			$attr['dotSizeMd'],
			$attr['dotSizeSm']
		);

		$overlay_style = '';
		if ( isset( $attr['rgbaBackground'] ) && $attr['rgbaBackground'] ) {
			$overlay_style .= 'background: ' . esc_attr( $attr['rgbaBackground'] ) . ';';
		}

		$content_classes = sprintf(
			'wp-block-eedee-gutenslider__content mb-%1$s co-%2$s',
			$attr['mixBlendMode'],
			$attr['contentOpacity']
		);

		$slider_settings = array(
			'lazyload'         => 'ondemand',
			'infinite'         => true,
			'pauseOnFocus'     => true,
			'pauseOnHover'     => true,
			'dots'             => ! $attr['isFullScreen'] && $attr['dots'],
			'arrows'           => ! $attr['isFullScreen'] && $attr['arrows'],
			'autoplaySpeed'    => $attr['duration'] * 1000,
			'speed'            => $attr['fadeSpeed'] * 1000,
			'autoplay'         => $attr['autoplay'],
			'fade'             => $attr['fadeMode'],
			'pauseOnFocus'     => $attr['pauseOnFocus'],
			'pauseOnHover'     => $attr['pauseOnHover'],
			'pauseOnDotsHover' => $attr['pauseOnDotsHover'],
			'slidesToShow'     => $attr['fadeMode'] ? 1 : $attr['slidesToShow'],
			'slidesToScroll'   => $attr['fadeMode'] ? 1 : $attr['slidesToScroll'],
			'infinite'         => $attr['loop'],
			'responsive'       => array(
				array(
					'breakpoint' => 960,
					'settings'   => array(
						'dots'           => ! $attr['isFullScreen'] && $attr['dotsMd'],
						'arrows'         => ! $attr['isFullScreen'] && $attr['arrowsMd'],
						'slidesToShow'   => $attr['fadeMode'] ? 1 : $attr['slidesToShowMd'],
						'slidesToScroll' => $attr['fadeMode'] ? 1 : $attr['slidesToScrollMd'],
					),
				),
				array(
					'breakpoint' => 600,
					'settings'   => array(
						'dots'           => ! $attr['isFullScreen'] && $attr['dotsSm'],
						'arrows'         => ! $attr['isFullScreen'] && $attr['arrowsSm'],
						'slidesToShow'   => $attr['fadeMode'] ? 1 : $attr['slidesToShowSm'],
						'slidesToScroll' => $attr['fadeMode'] ? 1 : $attr['slidesToScrollSm'],
					),
				),
			),
		);

		$slider_settings = wp_json_encode( $slider_settings );

		$additional_attributes = '';
		if ( isset( $attr['parallaxDirection'] ) ) {
			$additional_attributes .= sprintf(
				'data-parallax-direction="%1$s"',
				esc_attr( $attr['parallaxDirection'] )
			);
		}
		if ( isset( $attr['parallaxAmount'] ) ) {
			$additional_attributes .= sprintf(
				' data-parallax-amount="%1$s"',
				esc_attr( $attr['parallaxAmount'] )
			);
		}

		// if the content mode is fixed, we need to print the content twice
		// and hide it in css, that is because wp gutenberg does not allow multiple
		// inner blocks by the time of writing
		// @fix @todo there will be another way soon.
		if ( 'fixed' === $attr['contentMode'] ) {
			return sprintf(
				'<div class="%1$s" style="%2$s">'
				. '<div class="slider-overlay" style="%7$s"></div>'
				. '<div class="slick-slider" data-slick=%5$s>%3$s</div>'
				. '<div class="%6$s" style="">%4$s</div>'
				. '</div>',
				esc_attr( $class ),
				$component_style,
				$inner_content,
				$inner_content,
				$slider_settings,
				$content_classes,
				$overlay_style
			);
		}

		return sprintf(
			'<div class="%1$s" style="%2$s" %5$s>'
			. '<div class="slick-slider" data-slick=%4$s>%3$s</div>'
			. '</div>',
			esc_attr( $class ),
			$component_style,
			$inner_content,
			$slider_settings,
			$additional_attributes
		);
	}
}
