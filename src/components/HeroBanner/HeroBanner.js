import './HeroBanner.css';

import React from 'react';

const HeroBanner = (props) => {
	return (
		<div className="hero-container">
			<h1>Hi, I'm Nick</h1>
			<h2>Performance Test Engineer</h2>
			<p>
				I specialize in load testing, performance analysis, and making web applications bulletproof under pressure.<br />
				Tools I use: <strong>JMeter</strong>, <strong>BlazeMeter</strong>, <strong>Sitespeed.io</strong>, and <strong>Lotus</strong>.
			</p>
			<div className="hero-metrics">
				<div className="metric-box">
					<span className="metric-label">Max Load: </span>
					<span className="metric-value">15k req/s</span>
				</div>
				<div className="metric-box">
					<span className="metric-label">Avg Load Time: </span>
					<span className="metric-value">0.9s</span>
				</div>
				<div className="metric-box">
					<span className="metric-label">Load Test Tools: </span>
					<span className="metric-value">JMeter, BlazeMeter, Lotus</span>
				</div>
				<div className="metric-box">
					<span className="metric-label">Client-side Performance Test Tools: </span>
					<span className="metric-value">Sitespeed.io, Lighthouse</span>
				</div>
			</div>
		</div>

	);
};

export default HeroBanner;
