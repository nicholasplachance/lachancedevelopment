import './App.css';

import BackDrop from './components/BackDrop/BackDrop';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import HeroBanner from './components/HeroBanner/HeroBanner';
import NavBar from './components/NavBar/NavBar';
import Section from './components/Sections/Section';
import SideDrawer from './components/SideDrawer/SideDrawer';
import { useState } from 'react';

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
						'Freelance Web Developer',
						'Designs Websites',
						'Completely custom code and layout',
						'Mobile responsive design'
					]}
					address={'St. Louis, Missouri'}
				/>
				<Section id='contact' title={'Contact me'} services={['Email me: nicholasplachance@gmail.com']} />
			</Container>
			<Footer />
		</div>
	);
}

export default App;
