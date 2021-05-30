import './HeroBanner.css';

const HeroBanner = (props) => {
	return (
		<div className='hero-image'>
			<div className='hero-text'>
				<h1>LaChance Development</h1>
				<p>Freelance Web Developer</p>
				<button className='call-to-action'>
					<a href='mainto:nicholasplachance@gmail.com'>Email me</a>
				</button>
				<h4>St. Louis based Web Developer</h4>
			</div>
		</div>
	);
};

export default HeroBanner;
