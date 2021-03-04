import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Box, Typography } from '@material-ui/core';

import specialLeftImage from '../branding/specialLeft';
import specialRightImage from '../branding/specialRight';

const useStyles = makeStyles((theme) => ({
	card: {
		height: '500px',
		marginTop: '1rem',
		textAlign: 'center',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
	},
	leftCard: {
		backgroundImage: `url(${specialLeftImage})`,
	},
	rightCard: {
		backgroundImage: `url(${specialRightImage})`,
	},
	filter: {
		background: 'linear-gradient(0deg, #00000088 5%, #FFFFFF20 60%)',
		width: '100%',
		height: '100%',
		'&:hover': {
			background: 'linear-gradient(0deg, #00000088 20%, #FFFFFF20 60%)',
		},
	},
	flexHero: {
		display: 'flex',
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
		<Grid container spacing={3}>
			<Grid item md={5} sm={12} xs={12}>
				<Paper className={`${classes.card} ${classes.leftCard}`} elevation={3}>
					<Box className={`${classes.filter} ${classes.flexHero}`}>
						<Typography variant='h5' className={classes.cardText}>
							Buy 3 pizzas for $5 each with the 5-5-5 Deal.
						</Typography>
						<Typography className={classes.cardHeader} variant='h2'>
							$5 Each
						</Typography>
					</Box>
				</Paper>
			</Grid>
			<Grid item md={7} sm={12} xs={12}>
				<Paper className={`${classes.card} ${classes.rightCard}`} elevation={3}>
					<Box className={`${classes.filter} ${classes.flexHero}`}>
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
