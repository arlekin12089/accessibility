function Header () {
	let scrollpos = window.scrollY;
	const header = document.querySelector( ".header--modified" );
	const menu_toggle = document.querySelector( ".menu-toggle" );
	if ( header ) {
		const header_height = header.offsetHeight;
		const add_class_on_scroll = () => header.classList.add( "fade-in" );
		const add_class_on_scroll_menu_toggle = () =>
			menu_toggle.classList.add( "fade-in-nav" );
		const remove_class_on_scroll = () => header.classList.remove( "fade-in" );
		const remove_class_on_scroll_menu_toggle = () =>
			menu_toggle.classList.remove( "fade-in-nav" );
		window.addEventListener( "scroll", function () {
			scrollpos = window.scrollY;
			if ( scrollpos >= header_height ) {
				add_class_on_scroll();
				add_class_on_scroll_menu_toggle();
			} else {
				remove_class_on_scroll();
				remove_class_on_scroll_menu_toggle();
			}
		} );
	}
}

Header();

function Menu () {
	const menu = document.querySelector( ".main-menu" );
	const menuToggle = document.querySelector( ".menu-toggle" );

	window.addEventListener( "load", () => {
		toggleMobileMenu();
	} );

	function toggleMobileMenu () {
		if ( menuToggle ) {
			menuToggle.addEventListener( "click", ( event ) => {
				event.preventDefault();
				menuToggle.classList.toggle( "menu-open" );
				menu.classList.toggle( "menu-opened" );
			} );
		}
	}
}

Menu();
