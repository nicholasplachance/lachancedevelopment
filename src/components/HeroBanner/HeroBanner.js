import './HeroBanner.css';

const HeroBanner = (props) => {
	return (
		<div className='hero-image'>
			<div className='hero-text'>
				<h1>Company Name</h1>
				<p>This is what we do</p>
				<button className='call-to-action'>
					<a href='tel:+13145966144'>Call now!</a>
				</button>
			</div>
		</div>
	);
};

export default HeroBanner;
