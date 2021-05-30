import './Footer.css';

import logo from '../../img/logo.png';

const Footer = (props) => {
	return (
		<div className='footerbar'>
			<footer>
				<div className='flex-column'>
					<ul>
						<li>
							<a href='mainto:nicholasplachance@gmail.com'>Email me</a>
						</li>
						<div className='footerbar__logo'>
							<img
								className='footerbar__logo__image'
								src={logo}
								alt='LaChance development logo'
								srcset=''
							/>
							<a>LaChance Development</a>
						</div>
					</ul>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
