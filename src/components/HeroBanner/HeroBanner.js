import './HeroBanner.css';

import React from 'react';

const HeroBanner = (props) => {
	return (
		<div className='hero-image'>
			<div className='hero-title'>
				<h2 className='hero-text-title'>Hi. I am Nick.</h2>
				<p>I create websites.</p>
			</div>
			<div className='hero-text'>
				<h1>LaChance Development</h1>
				<p>Application Performance Test Engineer</p>
				<a className='call-to-action' href='mailto:nicholasplachance@gmail.com'>
					<p>Get in touch</p>
				</a>
				<h4>St. Louis based Web Developer</h4>
			</div>
		</div>
	);
};

export default HeroBanner;
