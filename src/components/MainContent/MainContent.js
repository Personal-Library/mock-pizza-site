import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Box, Typography } from '@material-ui/core';

import specialLeftImage from '../../branding/specialleft';
import specialRightImage from '../../branding/specialright';

const useStyles = makeStyles((theme) => ({
	main: {},
	card: {
		height: '500px',
		marginTop: '1em',
		textAlign: 'center',
	},
	leftCard: {
		backgroundImage: `url(${specialLeftImage})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
	},
	rightCard: {
		backgroundImage: `url(${specialRightImage})`,
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
	cardText: {
		paddingLeft: '1rem',
		paddingRight: '1rem',
		color: '#EEEEEE',
	},
}));

const MainContent = () => {
	const classes = useStyles();

	return (
		<Grid container spacing={3} className={classes.main}>
			<Grid item md={5} sm={12} xs={12}>
				<Paper className={`${classes.card} ${classes.leftCard}`} elevation={3}>
					<Box display='flex' className={`${classes.filter} ${classes.flexHero}`}>
						<Typography variant='h5' className={classes.cardText}>
							Buy 3 pizzas for $5 each with the 5-5-5 Deal.
						</Typography>
						<Typography className={classes.cardHeader} variant='h2'>
							$5 each
						</Typography>
					</Box>
				</Paper>
			</Grid>
			<Grid item md={7} sm={12} xs={12}>
				<Paper className={`${classes.card} ${classes.rightCard}`} elevation={3}>
					<Box display='flex' className={`${classes.filter} ${classes.flexHero}`}>
						<Typography variant='h5' className={classes.cardText}>
							Get 2 large pizzas, 2-liter coke, and 2 sides for $29.99 with the Family Deal.
						</Typography>
						<Typography className={classes.cardHeader} variant='h2'>
							Feed the Family
						</Typography>
					</Box>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default MainContent;
