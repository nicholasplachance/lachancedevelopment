import './SideDrawer.css';

const SideDrawer = (props) => {
	let drawerClasses = 'side-drawer';

	if (props.show) {
		drawerClasses = 'side-drawer open';
	}

	return (
		<nav className={drawerClasses}>
			<ul>
				<ul>
					<li>
						<a href='mainto:nicholasplachance@gmail.com'>Email us</a>
					</li>
				</ul>
			</ul>
		</nav>
	);
};

export default SideDrawer;
