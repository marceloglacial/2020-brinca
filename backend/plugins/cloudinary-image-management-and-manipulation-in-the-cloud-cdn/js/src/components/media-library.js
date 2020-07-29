/* global window wp */
const Media_Library = {
	wpWrap: document.getElementById( 'wpwrap' ),
	wpContent: document.getElementById( 'wpbody-content' ),
	libraryWrap: document.getElementById( 'cloudinary-embed' ),
	_init: function() {
		let self = this;
		if ( typeof CLD_ML !== 'undefined' ) {

			cloudinary.openMediaLibrary( CLD_ML.mloptions, {
					insertHandler: function( data ) {
						// @todo: Determin what to do here.
						alert( 'Import is not yet implemented.' );
					}
				}
			);

			window.addEventListener( 'resize', function( ev ) {
				self._resize();
			} );

			self._resize();
		}
	},
	_resize: function() {
		let style = getComputedStyle( this.wpContent );
		this.libraryWrap.style.height = (this.wpWrap.offsetHeight - parseInt( style.getPropertyValue( 'padding-bottom' ) )) + 'px';
	},
};

export default Media_Library;

// Init.
Media_Library._init();
