import './BackDrop.css';

import React from 'react';

const BackDrop = (props) => {
	return <div className='backdrop' onClick={props.click}></div>;
};

export default BackDrop;
