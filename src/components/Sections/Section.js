import './Section.css';

const Section = (props) => {
	return (
		<div className='card'>
			<div className='section-header'>
				<h1>{props.title}</h1>
				{props.subtitle ? <h2>{props.subtitle}</h2> : null}
			</div>
			<div className='section'>
				<div className='card-container'>
					<ul>{props.services ? props.services.map((service) => <li>{service}</li>) : null}</ul>
					<address>
						{props.address ? (
							<div className='address-container'>
								<h4 href='#'>{props.address}</h4>
							</div>
						) : null}
					</address>
				</div>
			</div>
		</div>
	);
};

export default Section;
