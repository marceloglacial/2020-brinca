import $ from 'jquery';

$.fn.imagesLoaded = ( function() {
	const videoLoaded = function( video, cb ) {
		$( video ).on( 'loadeddata', cb );
	};

	const imageLoaded = function( img, cb, delay ) {
		let timer;
		let isReponsive = false;
		let $parent = $( img ).parent();
		const $img = $( '<img />' );
		const srcset = $( img ).attr( 'srcset' );
		const sizes = $( img ).attr( 'sizes' ) || '100vw';
		const src = $( img ).attr( 'src' );
		const onload = function() {
			$img.off( 'load error', onload );
			clearTimeout( timer );
			cb();
		};

		if ( delay ) {
			timer = setTimeout( onload, delay );
		}

		$img.on( 'load error', onload );

		if ( $parent.is( 'picture' ) ) {
			$parent = $parent.clone();
			$parent.find( 'img' ).remove().end();
			$parent.append( $img );
			isReponsive = true;
		}

		if ( srcset ) {
			$img.attr( 'sizes', sizes );
			$img.attr( 'srcset', srcset );
			if ( ! isReponsive ) {
				$img.appendTo( document.createElement( 'div' ) );
			}
			isReponsive = true;
		} else if ( src ) {
			$img.attr( 'src', src );
		}

		if ( isReponsive && ! window.HTMLPictureElement ) {
			if ( window.respimage ) {
				window.respimage( { elements: [ $img[ 0 ] ] } );
			} else if ( window.picturefill ) {
				window.picturefill( { elements: [ $img[ 0 ] ] } );
			} else if ( src ) {
				$img.attr( 'src', src );
			}
		}
	};

	return function( cb ) {
		let i = 0;
		const $imgs = $( 'img', this ).add( this.filter( 'img' ) );
		const $vids = $( 'video', this ).add( this.filter( 'video' ) );
		const ready = function() {
			i++;
			if ( i >= $imgs.length + $vids.length ) {
				cb();
			}
		};
		$imgs.each( function( ) {
			imageLoaded( this, ready );
		} );
		$vids.each( function() {
			videoLoaded( this, ready );
		} );
		return this;
	};
}( ) );

jQuery( '.wp-block-eedee-block-gutenslider' ).each( function( idx, el ) {
	// jQuery( el ).imagesLoaded( function() {
		const slickSlider = jQuery( el ).find( '.slick-slider' );
		slickSlider.slick( {
			slide: '.wp-block-eedee-block-gutenslide',
			prevArrow: '<button type="button" class="slick-prev pull-left"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
			nextArrow: '<button type="button" class="slick-next pull-right"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
		} );

		// unset the preloading bg image
		jQuery( slickSlider ).on( 'beforeChange', function() {
			slickSlider.css( 'background-image', 'url( \'\' )' );
		} );
	// } );
} );


/* Premium Code Stripped by Freemius */

