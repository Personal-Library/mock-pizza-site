import React from 'react';
import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './Theme';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<NavBar />
				<Container>
					<Hero />
					<MainContent />
					<About />
				</Container>
				<Footer />
			</ThemeProvider>
		</React.Fragment>
	);
};

export default App;
