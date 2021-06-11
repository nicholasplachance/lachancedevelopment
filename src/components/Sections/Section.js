import './Section.css';

import Cardbackground3 from '../../img/cardbackground3.jpg';
import React from 'react';

const Section = (props) => {
	return (
		<div className='card'>
			<div className='section-header'>
				<h2>{props.title}</h2>
				{props.subtitle ? <h2>{props.subtitle}</h2> : null}
			</div>
			<div className='section card-img'>
				<div className='card-container'>
					<ul>{props.services ? props.services.map((service) => <li>{service}</li>) : null}</ul>
					<address>
						{props.address ? (
							<div className='address-container'>
								<h4>Based in:</h4>
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
