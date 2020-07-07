import './style.scss';
import './editor.scss';
import '../admin/admin.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const {
	registerBlockType,
} = wp.blocks;

import {
	attributes as slideAttributes,
} from './gutenslide/attributes';

import {
	attributes as sliderAttributes,
} from './gutenslider/attributes';

import './filters';

import sliderSave from './gutenslider/save';
import sliderDeprecated from './gutenslider/deprecations';
import slideDeprecated from './gutenslide/deprecations';
import sliderEdit from './gutenslider/block_free/edit';
import editGutenslide from './gutenslide/block_free/edit';
import saveSlide from './gutenslide/save';
import icons from './icons';
import example from './example';

import { responsiveAttributes } from '../components/reusable/responsive-tabs/utils';

// the attributes that will be made responsive by adding Sm and Md attributes to block
const responsiveSelectors = [ 'sliderHeight', 'slidesToShow', 'slidesToScroll', 'dots', 'arrows', 'paddingX', 'paddingY' ];
const breakpoints = [ 'Sm', 'Md' ];

/**
 * Register: The Free Version of Gutenslider Block
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'eedee/block-gutenslider', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Gutenslider' ), // Block title.
	description: __( 'Slider Block for Gutenberg that slides images with arbitrary blocks on top.', 'eedee-gutenslider' ),
	icon: icons.gutenslider,
	category: 'common',
	keywords: [
		__( 'Slider', 'eedee-gutenslider' ),
		__( 'Image', 'eedee-gutenslider' ),
		__( 'Carousel', 'eedee-gutenslider' ),
	],
	attributes: responsiveAttributes( sliderAttributes, responsiveSelectors, breakpoints ),
	supports: {
		align: [ 'wide', 'full' ],
	},

	/**
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: sliderEdit,
	save: sliderSave,
	deprecated: sliderDeprecated,
	example,
} );

registerBlockType( 'eedee/block-gutenslide', {
	title: __( 'Gutenslide' ), // Block title.
	description: __( 'Single Slide for Gutenslider.', 'eedee-gutenslider' ),
	icon: icons.gutenslider,
	category: 'common',
	keywords: [
		__( 'Slide', 'eedee-gutenslider' ),
		__( 'Image', 'eedee-gutenslider' ),
		__( 'Carousel', 'eedee-gutenslider' ),
	],
	parent: [ 'eedee/block-gutenslider' ],
	attributes: slideAttributes,
	deprecated: slideDeprecated,
	edit: editGutenslide,
	save: saveSlide,
} );
