import './HeroBanner.css';

import React from 'react';

const HeroBanner = (props) => {
	return (
		<div className='hero-image'>
			<div className='hero-text'>
				<h1>LaChance Development</h1>
				<p>Freelance Web Developer</p>
				<a className='call-to-action' href='mailto:nicholasplachance@gmail.com'>
					<p>Send me an email</p>
				</a>
				<h4>St. Louis based Web Developer</h4>
			</div>
		</div>
	);
};

export default HeroBanner;
