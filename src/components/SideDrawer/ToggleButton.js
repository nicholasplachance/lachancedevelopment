import './ToggleButton.css';

import React from 'react';

const ToggleButton = (props) => {
	return (
		<button className='toggle-button' onClick={props.click}>
			<div className='toggle-button__line'></div>
			<div className='toggle-button__line'></div>
			<div className='toggle-button__line'></div>
		</button>
	);
};

export default ToggleButton;
