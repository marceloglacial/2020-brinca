/* global window wp */
const Global_Transformations = {
	sample: {
		image: document.getElementById( 'transformation-sample-image' ),
		video: document.getElementById( 'transformation-sample-video' ),
	},
	preview: {
		image: document.getElementById( 'sample-image' ),
		video: document.getElementById( 'sample-video' ),
	},
	fields: document.getElementsByClassName( 'cld-field' ),
	button: {
		image: document.getElementById( 'refresh-image-preview' ),
		video: document.getElementById( 'refresh-video-preview' ),
	},
	spinner: {
		image : document.getElementById( 'image-loader' ),
		video : document.getElementById( 'video-loader' ),
	},
	activeItem: null,
	elements: {
		image: [],
		video: [],
	},
	_placeItem: function( item ) {
		if ( null !== item ) {
			item.style.display    = 'block';
			item.style.visibility = 'visible';
			item.style.position   = 'absolute';
			item.style.top        = (item.parentElement.clientHeight / 2) - (item.clientHeight / 2) + 'px';
			item.style.left       = (item.parentElement.clientWidth / 2) - (item.clientWidth / 2) + 'px';
		}
	},
	_setLoading: function( type ) {
		this.button[ type ].style.display = 'block';
		this._placeItem( this.button[ type ] );
		this.preview[ type ].style.opacity = '0.1';

		},
	_build: function( type ) {
		this.sample[ type ].innerHTML = '';
		this.elements[ type ]         = [];
		for (let item of this.fields) {
			if( type !== item.dataset.context ){
				continue;
			}
			let value = item.value.trim();
			if ( value.length ) {

				if ( 'select-one' === item.type ) {
					if ( 'none' === value ) {
						continue;
					}
					value = item.dataset.meta + '_' + value;
				}
				else {
					let type = item.dataset.context;
					value = this._transformations( value, type, true );
				}
				// Apply value if valid.
				if( value ) {
					this.elements[ type ].push( value );
				}
			}
		}
		let transformations = '';
		if ( this.elements[ type ].length ) {
			transformations = '/' + this.elements[ type ].join( ',' ).replace( / /g, '%20' );
		}
		this.sample[ type ].textContent        = transformations;
		this.sample[ type ].parentElement.href = 'https://res.cloudinary.com/demo/' + this.sample[ type ].parentElement.innerText.trim().replace('../', '').replace( / /g, '%20' );
	},
	_clearLoading: function( type ) {
		this.spinner[ type ].style.visibility = 'hidden';
		this.activeItem               = null;
		this.preview[ type ].style.opacity      = 1;
	},
	_refresh: function( e, type ) {
		if( e ) {
			e.preventDefault();
		}
		let self                  = this;
		let new_src               = CLD_GLOBAL_TRANSFORMATIONS[ type ].preview_url + self.elements[ type ].join( ',' ) + CLD_GLOBAL_TRANSFORMATIONS[ type ].file;
		this.button[ type ].style.display = 'none';
		this._placeItem( this.spinner[ type ] );
		if ( type === 'image' ) {
			let newImg = new Image;
			newImg.onload = function() {
				self.preview[ type ].src = this.src;
				self._clearLoading( type );
				newImg.remove();
			};
			newImg.onerror = function() {
				alert( CLD_GLOBAL_TRANSFORMATIONS[type].error );
				self._clearLoading( type );
			};
			newImg.src = new_src;
		}else{
			let transformations = self._transformations( self.elements[ type ].join( ',' ), type );
			samplePlayer.source( { publicId: 'dog', transformation: transformations } );
			self._clearLoading( type );
		}
	},
	_transformations : function( input, type, string = false ){
		let set = CLD_GLOBAL_TRANSFORMATIONS[ type ].valid_types;
		let value = null;
		let elements = input.split( '/' );
		let valid_elements = [];
		for (let i = 0; i < elements.length; i++) {
			let parts = elements[ i ].split(',');
			let valid_parts;
			if( true === string ) {
				valid_parts = [];
			}else{
				valid_parts = {};
			}
			for (let p = 0; p < parts.length; p++) {
				let key_val = parts[ p ].trim().split('_');
				if( key_val.length <= 1 || typeof set[ key_val[0] ] === 'undefined' ){
					continue;
				}
				let option = key_val.shift();
				let instruct = key_val.join( '_' );
				if( true === string ) {
					if( 'f' === option || 'q' === option ){
						for( let t in this.elements[ type ] ){
							if( option + '_' === this.elements[ type ][ t ].substr(0,2 ) ){
								this.elements[ type ].splice(t,1);
							}
						}
					}
					valid_parts.push( parts[ p ] );
				}else{
					valid_parts[ set[ option ] ] = instruct.trim();
				}
			}
			let length = 0;
			if( true === string ) {
				length = valid_parts.length;
			}else{
				length = Object.keys( valid_parts ).length;
			}
			if ( length ) {
				if( true === string ) {
					valid_parts = valid_parts.join( ',' );
				}
				valid_elements.push( valid_parts );
			}
		}

		if ( valid_elements.length ) {
			if( true === string ) {
				value = valid_elements.join( '/' ).trim();
			}else{
				value = valid_elements;
			}
		}

		return value;
	},
	_reset: function() {
		for (let item of this.fields) {
			item.value = null;
		}
		for( let type in this.button ) {
			this._build( type );
			this._refresh( null, type );
		}
	},
	_input: function( input ){
		if( typeof input.dataset.context !== 'undefined' && input.dataset.context.length ) {
			let type = input.dataset.context;
			this._setLoading( type );
			this._build( type );
		}
	},
	_init: function() {

		if ( typeof CLD_GLOBAL_TRANSFORMATIONS !== 'undefined' ) {
			let self = this;

			document.addEventListener( 'DOMContentLoaded', function( ev ) {
				for( let type in self.button ) {
					if( self.button[ type ] ) {
						self.button[ type ].addEventListener( 'click', function( e ) {
							self._refresh( e, type );
						} );
					}
				}
				for (let item of self.fields) {
					item.addEventListener( 'input', function(){
						self._input( this );
					} );
					item.addEventListener( 'change', function() {
						self._input( this );
					} );
				}
				// Init.
				for( let type in CLD_GLOBAL_TRANSFORMATIONS ) {
					self._build( type );
					self._refresh( null, type );
				}
			} );
			// listen to AJAX add-tag complete
			jQuery(document).ajaxComplete(function(event, xhr, settings) {

				// bail early if is other ajax call
				if( settings.data.indexOf('action=add-tag') === -1 ) {
					return;
				}

				// bail early if response contains error
				if( xhr.responseText.indexOf('wp_error') !== -1 ) {
					return;
				}
				self._reset();
			});
		}
	},
};

// Init.
Global_Transformations._init();

export default Global_Transformations;
