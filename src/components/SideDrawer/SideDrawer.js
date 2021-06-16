import './SideDrawer.css';

import React from 'react';
import resume from '../../Resume.pdf';

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
						<a href='mailto:nicholasplachance@gmail.com'>Email me</a>
					</li>
					<li>
						<a href={resume} target='_blank'>
							Resume
						</a>
					</li>
				</ul>
			</ul>
		</nav>
	);
};

export default SideDrawer;
