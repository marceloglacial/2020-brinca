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

import sliderSave from './gutenslider/save';
import sliderEdit from './gutenslider/block_pro/edit';
import sliderDeprecated from './gutenslider/deprecations';
import slideDeprecated from './gutenslide/deprecations';
import editGutenslide from './gutenslide/block_pro/edit';
import saveSlide from './gutenslide/save';
import icons from './icons';

/**
 * Register: The Pro Version of Gutenslider Block
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
	description: __( 'Slider Block for Gutenberg that slides images with arbitrary blocks on top.' ),
	icon: icons.gutenslider,
	category: 'common',
	keywords: [
		__( 'Slider' ),
		__( 'Image' ),
		__( 'Carousel' ),
	],
	attributes: sliderAttributes,
	supports: {
		align: [ 'wide', 'full' ],
	},
	// template: [
	// 	'eedee/block-gutenslider-content',
	// ],
	/**
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: sliderEdit,
	save: sliderSave,
	deprecated: sliderDeprecated,
} );

registerBlockType( 'eedee/block-gutenslide', {
	title: __( 'Gutenslide' ), // Block title.
	description: __( 'Single Slide for Gutenslider.' ),
	icon: icons.gutenslider,
	category: 'common',
	keywords: [
		__( 'Slide' ),
		__( 'Image' ),
		__( 'Carousel' ),
	],
	parent: [ 'eedee/block-gutenslider' ],
	attributes: slideAttributes,
	deprecated: slideDeprecated,
	edit: editGutenslide,
	save: saveSlide,
} );
