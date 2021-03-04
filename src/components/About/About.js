import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Box } from '@material-ui/core';

import ownerImage from '../../branding/about';

const useStyles = makeStyles((theme) => ({
	main: {},
	card: {
		height: '500px',
		marginTop: '1em',
		textAlign: 'center',
	},
	ownerCard: {
		backgroundImage: `url(${ownerImage})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
	},
	filter: {
		background: 'linear-gradient(0deg, #00000088 30%, #FFFFFF44 100%)',
		width: '100%',
		height: '100%',
	},
	flexHero: {
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	cardHeader: {
		color: '#EEEEEE',
		cursor: 'pointer',
		padding: '1rem',
		fontWeight: 400,
	},
	aboutUs: {
		paddingBottom: '1rem',
		[theme.breakpoints.down('xs')]: {
			fontSize: '38px',
			paddingBottom: 0,
		},
	},
}));

const About = () => {
	const classes = useStyles();

	return (
		<Grid container spacing={3} className={classes.main}>
			<Grid item md={7} sm={12} xs={12}>
				<Paper className={`${classes.card} ${classes.ownerCard}`} elevation={3}>
					<Box display='flex' className={`${classes.filter} ${classes.flexHero}`}>
						<Typography variant='h2' className={classes.cardHeader}>
							We are here for you.
						</Typography>
					</Box>
				</Paper>
			</Grid>
			<Grid item md={5} sm={12} xs={12}>
				<Paper className={classes.card} elevation={3}>
					<Box padding='1rem'>
						<Typography variant='h1' className={classes.aboutUs}>
							About us
						</Typography>
						<Typography variant='p'>
							Pizza ipsum dolor amet pie sauteed onions garlic parmesan, spinach white pizza meat
							lovers pineapple ricotta pesto garlic garlic sauce lasagna stuffed crust buffalo
							sauce. Meatball meat lovers bacon, philly steak red onions peppers meatball. Pepperoni
							parmesan buffalo sauce bacon, Chicago style string cheese burnt mouth hawaiian spinach
							deep crust.
						</Typography>
						<br />
						<br />
						<Typography variant='p'>
							Bianca steak thin crust mushrooms large lasagna, meatball anchovies garlic parmesan
							pepperoni bacon & tomato mozzarella hawaiian. Bacon & tomato anchovies bacon white
							pizza, pizza roll mayo parmesan mushrooms pepperoni hawaiian black olives. Buffalo
							sauce party thin crust ranch personal.
						</Typography>
					</Box>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default About;
