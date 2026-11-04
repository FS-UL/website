( function () {
	document.querySelectorAll( '.team-card' ).forEach( function ( card ) {
		if ( ! card.querySelector( '.team-card__back' ) ) {
			return;
		}
		card.setAttribute( 'tabindex', '0' );
		card.setAttribute( 'role', 'button' );
		card.setAttribute( 'aria-pressed', 'false' );
		card.setAttribute( 'title', 'Click to flip' );
		var flipped = false;
		function flip() {
			flipped = ! flipped;
			card.style.setProperty( '--flip', flipped ? 1 : 0 );
			card.setAttribute( 'aria-pressed', flipped ? 'true' : 'false' );
		}
		card.addEventListener( 'click', flip );
		card.addEventListener( 'keydown', function ( e ) {
			if ( e.key === 'Enter' || e.key === ' ' ) {
				e.preventDefault();
				flip();
			}
		} );
	} );
} )();
