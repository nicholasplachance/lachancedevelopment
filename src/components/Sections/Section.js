import './Section.css';

const Section = (props) => {
	return (
		<div className='card'>
			<div className='section-header'>
				<h2>{props.title}</h2>
				{props.subtitle ? <h3>{props.subtitle}</h3> : null}
			</div>
			<div className='section'>
				<div className='card-container'>
					<ul>{props.services ? props.services.map((service) => <li>{service}</li>) : null}</ul>
					<address>
						{props.address ? (
							<div className='address-container'>
								<h4>Find us on Google Maps</h4>{' '}
								<a href='https://goo.gl/maps/BGLcPPjXMHQvZJdh9'>{props.address}</a>
							</div>
						) : null}
					</address>
				</div>
			</div>
		</div>
	);
};

export default Section;
