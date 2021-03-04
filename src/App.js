import React from 'react';
import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import theme from './Theme';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import MainContent from './components/MainContent/MainContent';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<Container>
				<Hero />
				<MainContent />
				<About />
			</Container>
			<Footer />
		</ThemeProvider>
	);
};

export default App;
