import './Footer.css';

import React from 'react';
import logo from '../../img/logo.png';

const Footer = (props) => {
	return (
		<div className='footerbar'>
			<footer>
				<div className='flex-column'>
					<ul className='footer_links'>
						<li>
							<a href='mailto:nicholasplachance@gmail.com'>Email me</a>
						</li>
						<div className='footerbar__logo'>
							<img
								className='footerbar__logo__image'
								src={logo}
								alt='LaChance development logo'
								srcset=''
							/>
							<p>LaChance Development</p>
						</div>
					</ul>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
