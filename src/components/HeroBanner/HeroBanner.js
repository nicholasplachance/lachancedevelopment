import './HeroBanner.css';

const HeroBanner = (props) => {
	return (
		<div className='hero-image'>
			<div className='hero-text'>
				<h1>LaChance Development</h1>
				<p>Freelance Web Developer</p>
				<a className='call-to-action' href='mainto:nicholasplachance@gmail.com'>
					<p>Email me</p>
				</a>
				<h4>St. Louis based Web Developer</h4>
			</div>
		</div>
	);
};

export default HeroBanner;
