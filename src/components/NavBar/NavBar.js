import './NavBar.css';

import ToggleButton from '../SideDrawer/ToggleButton';
import logo from '../../img/logo.png';

const NavBar = (props) => {
	return (
		<header className='navbar'>
			<nav className='navbar-navigation'>
				<div className='navbar__toggle_button'>
					<ToggleButton click={props.drawerToggleClickHandler} />
				</div>
				<div className='navbar__logo'>
					<img className='navbar__logo__image' src={logo} alt='LaChance development logo' srcset='' />
					<a>LaChance Development</a>
				</div>
				<div className='spacer'></div>
				<div className='navbar__items'>
					<ul>
						<li>
							<a href='mainto:nicholasplachance@gmail.com'>Email me</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
