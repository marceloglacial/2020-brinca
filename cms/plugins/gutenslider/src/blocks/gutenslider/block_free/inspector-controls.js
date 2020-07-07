const { __ } = wp.i18n;
const {
	InspectorControls,
} = wp.blockEditor;
const {
	Button,
	PanelBody,
	RangeControl,
	ToggleControl,
	SelectControl,
	ButtonGroup,
	ColorIndicator,
} = wp.components;

import * as Icon from 'react-feather';

import { PARALLAX_DIRECTIONS } from '../attributes';
import UnitButton from '../../../components/unit-button';
import { ResponsiveTabs } from '../../../components/reusable/responsive-tabs/ResponsiveTabs';

export const inspectorControls = ( attributes, block ) => {
	const {
		contentMode,
		fadeMode,
		dots,
		dotSize,
		dotColor,
		arrows,
		arrowSize,
		arrowColor,
		sliderHeight,
		sliderHeightMd,
		sliderHeightSm,
		paddingX,
		paddingY,
		isFullScreen,
		hasParallax,
		pauseOnFocus,
		pauseOnHover,
		pauseOnDotsHover,
		parallaxDirection,
		parallaxAmount,
		mixBlendMode,
		autoplay,
		contentOpacity,
		loop,
	} = attributes;

	const {
		enableMixBlendPreview,
	} = block.state;

	const responsiveSliderHeightBreakpoints = [
		{
			name: 'Lg',
			componentProps: {
				value: sliderHeight,
				label: ( <span> { __( 'Slider Height', 'eedee-gutenslider' ) } <small>({ __( 'Desktop', 'eedee-gutenslider' ) })</small></span> ),
				onChange: ( val ) => block.setAttributes( { sliderHeight: val } ),
			},
		},
		{
			name: 'Md',
			componentProps: {
				value: sliderHeightMd,
				label: ( <span> { __( 'Slider Height', 'eedee-gutenslider' ) } <small>({ __( 'Tablet', 'eedee-gutenslider' ) })</small></span> ),
				onChange: ( val ) => block.setAttributes( { sliderHeightMd: val } ),
			},
		},
		{
			name: 'Sm',
			componentProps: {
				value: sliderHeightSm,
				label: ( <span> { __( 'Slider Height', 'eedee-gutenslider' ) } <small>({ __( 'Mobile', 'eedee-gutenslider' ) })</small></span> ),
				onChange: ( val ) => block.setAttributes( { sliderHeightSm: val } ),
			},
		},
	];

	const arrowPanelTitle = (
		<span className="editor-panel-color-settings__panel-title block-editor-panel-color-settings__panel-title">
			{ __( 'Arrow Settings', 'eedee-gutenslider' ) }
			<ColorIndicator
				aria-label="(border color: #000)"
				colorValue={ arrowColor } />
		</span>
	);

	const dotPanelTitle = (
		<span className="editor-panel-color-settings__panel-title block-editor-panel-color-settings__panel-title">
			{ __( 'Dot Settings', 'eedee-gutenslider' ) }
			<ColorIndicator
				aria-label="(border color: #000)"
				colorValue={ dotColor } />
		</span>
	);

	return (
		<InspectorControls >
			<PanelBody
				title={ __( 'Slider Settings', 'eedee-gutenslider' ) }
				className="gutenslider-controls-general eedee-icon-panel"
				icon={ <Icon.Settings size={ 18 } /> }
			>
				<ButtonGroup aria-label={ __( 'Fade Mode', 'eedee-gutenslider' ) } className="gutenslider-toggle-fade-mode">
					<Button
						isSecondary={ ! fadeMode }
						isPrimary={ fadeMode }
						aria-pressed={ fadeMode }
						onClick={ () => {
							block.setFadeMode( true );
						} }
					>
						Fade Animation
					</Button>
					<Button
						isSecondary={ fadeMode }
						isPrimary={ ! fadeMode }
						aria-pressed={ ! fadeMode }
						onClick={ () => {
							block.setFadeMode( false );
						} }
					>
						Slide Animation
					</Button>
				</ButtonGroup>
				<ButtonGroup aria-label={ __( 'Slide Mode', 'eedee-gutenslider' ) } className="gutenslider-toggle-content-mode">
					<Button
						isSecondary={ contentMode === 'change' }
						isPrimary={ contentMode === 'fixed' }
						aria-pressed={ contentMode === 'fixed' }
						onClick={ () => {
							block.setContentMode( 'fixed' );
						} }
					>
						Fixed Content
					</Button>
					<Button
						isSecondary={ contentMode === 'fixed' }
						isPrimary={ contentMode === 'change' }
						aria-pressed={ contentMode === 'change' }
						onClick={ () => {
							block.setContentMode( 'change' );
						} }
					>
						Changing Content
					</Button>
				</ButtonGroup>
				{ ! isFullScreen &&
					<ResponsiveTabs
						breakpoints={ responsiveSliderHeightBreakpoints }
					>
						<UnitButton
							btnUnits={ [ 'vh', 'px' ] }
							btnLabels={ [ '%', 'px' ] }
							mins={ [ 20, 100 ] }
							maxs={ [ 100, 1500 ] }
							step={ 1 }
							transformUnits={ true }
						/>
					</ResponsiveTabs>
				}
				<ToggleControl
					label={ __( 'Autoplay', 'eedee-gutenslider' ) }
					checked={ autoplay }
					onChange={ block.setAutoplay }
				/>
				<ToggleControl
					label={ __( 'Show Arrows', 'eedee-gutenslider' ) }
					checked={ arrows }
					onChange={ ( val ) => block.setAttributes( {
						arrows: val,
						arrowsMd: val,
						arrowsSm: val,
					} ) }
				/>
				<ToggleControl
					label={ __( 'Show Dots', 'eedee-gutenslider' ) }
					checked={ dots }
					onChange={ ( val ) => block.setAttributes( {
						dots: val,
						dotsMd: val,
						dotsSm: val,
					} ) }
				/>
				<ToggleControl
					label={ __( 'Loop', 'eedee-gutenslider' ) }
					checked={ loop }
					onChange={ block.setLoop }
				/>
				<ToggleControl
					label={ __( 'Fullscreen Background Slider', 'eedee-gutenslider' ) }
					checked={ isFullScreen }
					help={ isFullScreen ? __( 'Full Screen Background Slider preview is not available in the editor, check the live site to see it in action.', 'eedee-gutenslider' ) : null }
					onChange={ block.setFullscreen }
				/>
			</PanelBody>
			{ autoplay && <PanelBody
				title={ __( 'Autoplay Settings', 'eedee-gutenslider' ) }
				className="gutenslider-controls-autoplay eedee-icon-panel"
				initialOpen={ false }
				icon={
					<svg className="dashicon" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false"><path fill="none" d="M0 0h24v24H0V0z"></path><path fill="currentColor" d="M13.05 9.79L10 7.5v9l3.05-2.29L16 12l-2.95-2.21zm0 0L10 7.5v9l3.05-2.29L16 12l-2.95-2.21zm0 0L10 7.5v9l3.05-2.29L16 12l-2.95-2.21zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z"></path></svg>
				}
			>
				<ToggleControl
					label={ __( 'Pause on Focus', 'eedee-gutenslider' ) }
					checked={ pauseOnFocus }
					onChange={ block.setPauseOnFocus }
				/>
				<ToggleControl
					label={ __( 'Pause on Hover', 'eedee-gutenslider' ) }
					checked={ pauseOnHover }
					onChange={ block.setPauseOnHover }
				/>
				<ToggleControl
					label={ __( 'Pause on Dots Hover', 'eedee-gutenslider' ) }
					checked={ pauseOnDotsHover }
					onChange={ block.setPauseOnDotsHover }
				/>
			</PanelBody> }
			{ arrows && <PanelBody
				title={ arrowPanelTitle }
				className="gutenslider-controls-arrows eedee-icon-panel"
				initialOpen={ false }
				icon={ <Icon.ArrowRightCircle size={ 18 } /> }
			>
				<RangeControl
					label={ __( 'Arrow Size (px)', 'eedee-gutenslider' ) }
					value={ arrowSize }
					onChange={ block.setArrowSize }
					min={ 15 }
					max={ 100 }
					step={ 1 }
				/>
			</PanelBody> }
			{ dots && <PanelBody
				title={ dotPanelTitle }
				className="gutenslider-controls-dots eedee-icon-panel"
				initialOpen={ false }
				icon={ <Icon.Circle size={ 16 } /> }
			>
				<RangeControl
					label={ __( 'Dot Size (px)', 'eedee-gutenslider' ) }
					value={ dotSize }
					onChange={ block.setDotSize }
					min={ 15 }
					max={ 60 }
					step={ 1 }
				/>
			</PanelBody> }
			{ false && ! isFullScreen && <PanelBody
				title={ __( 'Parallax Settings', 'eedee-gutenslider' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __( 'Parallax', 'eedee-gutenslider' ) }
					checked={ hasParallax }
					onChange={ block.setParallax }
				/>
				{ hasParallax && <SelectControl
					label="Parallax Direction"
					value={ parallaxDirection }
					options={ PARALLAX_DIRECTIONS }
					onChange={ block.setParallaxDirection }
				/> }
				{ hasParallax && <RangeControl
					label={ __( 'Parallax Amount', 'eedee-gutenslider' ) }
					value={ parallaxAmount }
					onChange={ block.setParallaxAmount }
					min={ 1 }
					max={ 2 }
					step={ 0.1 }
				/> }
			</PanelBody>
			}
			<PanelBody
				title={ __( 'Spacing', 'eedee-gutenslider' ) }
				initialOpen={ false }
				className={ 'eedee-icon-panel' }
				icon={ <svg className="dashicon" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><g fill="currentColor"><path d="M12,18 L12,16 L6,16 L6,18 L2,18 C0.9,18 0,17.1 0,16 L0,12 L2,12 L2,6 L0,6 L0,2 C0,0.9 0.9,0 2,0 L6,0 L6,2 L12,2 L12,0 L16,0 C17.1,0 18,0.9 18,2 L18,6 L16,6 L16,12 L18,12 L18,16 C18,17.1 17.1,18 16,18 L12,18 Z M16,16 L16,2 L2,2 L2,16 L16,16 Z" fillRule="nonzero"></path><path d="M4,6 C4.55228475,6 5,6.44771525 5,7 L5,11 C5,11.5522847 4.55228475,12 4,12 C3.44771525,12 3,11.5522847 3,11 L3,7 C3,6.44771525 3.44771525,6 4,6 Z M14,6 C14.5522847,6 15,6.44771525 15,7 L15,11 C15,11.5522847 14.5522847,12 14,12 C13.4477153,12 13,11.5522847 13,11 L13,7 C13,6.44771525 13.4477153,6 14,6 Z M12,4 C12,4.55228475 11.5522847,5 11,5 L7,5 C6.44771525,5 6,4.55228475 6,4 C6,3.44771525 6.44771525,3 7,3 L11,3 C11.5522847,3 12,3.44771525 12,4 Z M12,14 C12,14.5522847 11.5522847,15 11,15 L7,15 C6.44771525,15 6,14.5522847 6,14 C6,13.4477153 6.44771525,13 7,13 L11,13 C11.5522847,13 12,13.4477153 12,14 Z" opacity="0.5"></path></g></svg> }
			>
				<UnitButton
					value={ paddingX }
					label={ <span> { __( 'Left + Right', 'eedee-gutenslider' ) }</span> }
					onChange={ ( val ) => block.setAttributes( { paddingX: val, paddingXMd: val, paddingXSm: val } ) }
					btnUnits={ [ 'px', '%' ] }
					btnLabels={ [ 'px', '%' ] }
					mins={ [ 0, 0 ] }
					maxs={ [ 100, 40 ] }
					step={ 1 }
					transformUnits={ true }
				/>
				<UnitButton
					value={ paddingY }
					label={ <span> { __( 'Top + Bottom', 'eedee-gutenslider' ) }</span> }
					onChange={ ( val ) => block.setAttributes( { paddingY: val, paddingYMd: val, paddingYSm: val } ) }
					btnUnits={ [ 'px', '%' ] }
					btnLabels={ [ 'px', '%' ] }
					mins={ [ 0, 0 ] }
					maxs={ [ 100, 40 ] }
					step={ 1 }
					transformUnits={ true }
				/>
			</PanelBody>
			{ false && <PanelBody
				title={ __( 'Art Settings', 'eedee-gutenslider' ) }
				initialOpen={ false }
			>
				<SelectControl
					label={ __( 'Mix Blend Mode', 'eedee-gutenslider' ) }
					value={ mixBlendMode }
					options={ [
						{ label: 'None', value: '' },
						{ label: 'Color Burn', value: 'color-burn' },
						{ label: 'Color Dodge', value: 'color-dodge' },
						{ label: 'Difference', value: 'difference' },
						{ label: 'Exclusion', value: 'exclusion' },
						{ label: 'Saturation', value: 'saturation' },
					] }
					onChange={ block.setMixBlendMode }
				/>
				{ mixBlendMode !== 'None' && <ToggleControl
					label={ __( 'Enable Preview', 'eedee-gutenslider' ) }
					help={ __( 'Enable or disable the preview of "Mix Blend Mode" setting above', 'eedee-gutenslider' ) }
					checked={ enableMixBlendPreview }
					onChange={ block.setEnableMixBlendPreview }
				/> }
				<RangeControl
					label={ __( 'Content Opacity', 'eedee-gutenslider' ) }
					value={ contentOpacity }
					onChange={ block.setContentOpacity }
					min={ 0 }
					max={ 1 }
					step={ 0.1 }
				/>
			</PanelBody> }
		</InspectorControls>
	);
};
