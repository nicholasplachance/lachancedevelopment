import './App.css';
import 'aos/dist/aos.css';

import { useEffect, useState } from 'react';

import Aos from 'aos';
import BackDrop from './components/BackDrop/BackDrop';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import HeroBanner from './components/HeroBanner/HeroBanner';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import Section from './components/Sections/Section';
import SideDrawer from './components/SideDrawer/SideDrawer';

function App() {
	const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

	const drawerToggleClickHandler = () => {
		setSideDrawerOpen((prevState) => {
			return { sideDrawerOpen: !prevState.setSideDrawerOpen };
		});
	};

	const backDropClickHandler = () => {
		setSideDrawerOpen(false);
	};

	let sideDrawer;
	let backdrop;

	if (sideDrawerOpen) {
		sideDrawer = <SideDrawer />;
		backdrop = <BackDrop click={backDropClickHandler} />;
	}
	return (
		<div className='App'>
			<NavBar drawerToggleClickHandler={drawerToggleClickHandler} />
			<SideDrawer show={sideDrawerOpen} />
			{backdrop}
			<HeroBanner />
			<main className='spacer'></main>
			<Container>
				<Section
					title={'LaChance Development'}
					subtitle={'Established 2021.'}
					services={[
						'- Freelance Web Developer',
						'',
						'- Design and build custom websites and web apps',
						'',
						'- Completely custom code and layout',
						'',
						'- Mobile friendly responsive design',
						'',
						'- SEO Optimized'
					]}
					address={'St. Louis, Missouri'}
				/>
				<Section
					id='contact'
					title={'About'}
					services={[
						'Hi, my name is Nicholas LaChance, one of my greatest passions is technology. With my passion I taught myself many technologies that allow me to create websites and web applications. My goal is to provide mobile responsive and SEO friendly websites written with clean code.'
					]}
				/>
				<Section id='contact' title={'Contact info'} services={['Email:', 'nicholasplachance@gmail.com']} />
			</Container>
			<Footer />
		</div>
	);
}

export default App;
