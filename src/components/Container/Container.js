import './Container.css';

import React from 'react';

const Container = (props) => {
	return <div className='main-container'>{props.children}</div>;
};

export default Container;
