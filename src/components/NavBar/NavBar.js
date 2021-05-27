import './NavBar.css';

import ToggleButton from '../SideDrawer/ToggleButton';

const NavBar = (props) => {
	return (
		<header className='navbar'>
			<nav className='navbar-navigation'>
				<div className='navbar__toggle_button'>
					<ToggleButton click={props.drawerToggleClickHandler} />
				</div>
				<div className='navbar__logo'>
					<a>LOGO</a>
				</div>
				<div className='spacer'></div>
				<div className='navbar__items'>
					<ul>
						<li>
							<a>About</a>
						</li>
						<li>
							<a>Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
