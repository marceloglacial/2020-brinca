const { __ } = wp.i18n;

import { defaultBackground } from '../components/reusable/background/attributes';

export default {
	attributes: {
		duration: 1.5,
		autoplay: true,
		arrows: true,
		dots: true,
		fadeMode: false,
		sliderHeight: '200px',
		sliderHeightMd: '200px',
		sliderHeightSm: '200px',
	},
	innerBlocks: [
		{
			name: 'eedee/block-gutenslide',
			attributes: {
				background: {
					...defaultBackground,
					backgroundType: 'image',
					backgroundImage: {
						url: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
					},
				},
			},
			innerBlocks: [
				{
					name: 'core/heading',
					attributes: {
						/* translators: example text for slide 1. */
						content: __( 'Slide 1' ),
						align: 'center',
					},
				},
			],
		},
		{
			name: 'eedee/block-gutenslide',
			attributes: {
				background: {
					...defaultBackground,
					backgroundType: 'image',
					backgroundImage: {
						url: 'https://images.unsplash.com/photo-1549876612-f9ea53d45266?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
					},
				},
			},
			innerBlocks: [
				{
					name: 'core/heading',
					attributes: {
						/* translators: example text for slide 2. */
						content: __( 'Slide 2' ),
						align: 'center',
						customTextColor: '#00CEFF',
					},
				},
			],
		},
		{
			name: 'eedee/block-gutenslide',
			attributes: {
				background: {
					...defaultBackground,
					backgroundType: 'image',
					backgroundImage: {
						url: 'https://images.unsplash.com/photo-1570368336224-455084c1fb31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
					},
				},
			},
			innerBlocks: [
				{
					name: 'core/heading',
					attributes: {
						/* translators: example text for slide 3. */
						content: __( 'Slide 3' ),
						align: 'center',
						customTextColor: '#ffffff',
					},
				},
			],
		},
	],
};
