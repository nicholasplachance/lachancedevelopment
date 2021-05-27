import './Footer.css';

const Footer = (props) => {
	return (
		<div className='footerbar'>
			<footer>
				<div className='flex-column'>
					<ul>
						<li>
							<a href='tel:+13145966144'>Call us</a>
						</li>
						<li>
							<a href='mainto:nicklachance5@gmail.com'>Email us</a>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>
							<a href='https://www.google.com/maps/place/9715+Tesson+Ferry+Rd,+St.+Louis,+MO+63123/@38.5432384,-90.3355378,17z/data=!3m1!4b1!4m5!3m4!1s0x87d8c9a14410a1b9:0x156de759050e0878!8m2!3d38.5432384!4d-90.3333491'>
								Locate us at:
							</a>
						</li>
						<li>
							<address>
								<a href='https://www.google.com/maps/place/9715+Tesson+Ferry+Rd,+St.+Louis,+MO+63123/@38.5432384,-90.3355378,17z/data=!3m1!4b1!4m5!3m4!1s0x87d8c9a14410a1b9:0x156de759050e0878!8m2!3d38.5432384!4d-90.3333491'>
									9715 Tesson Ferry Rd St. Louis, MO 63123
								</a>
							</address>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
