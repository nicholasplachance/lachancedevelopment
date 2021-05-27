import './HeroBanner.css';

const HeroBanner = (props) => {
	return (
		<div className='hero-image'>
			<div className='hero-text'>
				<h1>La Chance Development</h1>
				<p>Freelance Web Developer</p>
				<button className='call-to-action'>
					<a href='mainto:nicholasplachance@gmail.com'>Email me</a>
				</button>
			</div>
		</div>
	);
};

export default HeroBanner;
