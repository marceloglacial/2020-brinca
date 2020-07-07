const { __ } = wp.i18n;
const {
	InspectorControls,
	// withColors,
} = wp.blockEditor;
const {
	PanelBody,
	TextControl,
} = wp.components;

import BackgroundPanel from '../../../components/reusable/background/panel';

export const slideInspectorControls = ( notThis ) => {
	const {
		linkUrl,
		background,
	} = notThis.props.attributes;

	return (
		<InspectorControls>
			<BackgroundPanel
				value={ background }
				onChange={ bg => notThis.setAttributes( { background: bg } ) }
			/>
			<PanelBody
				title={ __( 'Slide Settings', 'eedee-gutenslider' ) }
				className="gutenslider-controls-advanced"
			>
				<TextControl
					label={ __( 'Slide Link', 'eedee-gutenslider' ) }
					value={ linkUrl || '' }
					onChange={ notThis.setLinkUrl }
					help={ __( 'Set an url that opens, when the user clicks the slide.', 'eedee-gutenslider' ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};
