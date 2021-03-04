import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Box, Typography } from '@material-ui/core';

import heroImage from '../branding/heroImage';
import sidesImage from '../branding/sides';
import delivImage from '../branding/delivery';

const useStyles = makeStyles((theme) => ({
	card: {
		height: '500px',
		marginTop: '1rem',
		textAlign: 'center',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
	},
	sidesCard: {
		backgroundImage: `url(${sidesImage})`,
		[theme.breakpoints.down('sm')]: {
			height: '200px',
		},
	},
	delivCard: {
		backgroundImage: `url(${delivImage})`,
		[theme.breakpoints.down('sm')]: {
			height: '200px',
		},
	},
	mainCard: {
		backgroundImage: `url(${heroImage})`,
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

const Hero = () => {
	const classes = useStyles();

	return (
		<Grid container spacing={3}>
			<Grid item md={3} sm={12} xs={12}>
				<Paper className={`${classes.card} ${classes.sidesCard}`} elevation={3}>
					<Box display='flex' className={`${classes.filter} ${classes.flexHero}`}>
						<Typography variant='h5' className={classes.cardText}>
							Craving some fries or wings?
						</Typography>
						<Typography className={classes.cardHeader} variant='h2'>
							Sides
						</Typography>
					</Box>
				</Paper>
			</Grid>
			<Grid item md={6} sm={12} xs={12}>
				<Paper className={`${classes.card} ${classes.mainCard}`} elevation={3}>
					<Box display='flex' className={`${classes.filter} ${classes.flexHero}`}>
						<Typography variant='h5' className={classes.cardText}>
							Try our new white pie with balsamic drizzle.
						</Typography>
						<Typography className={classes.cardHeader} variant='h2'>
							Menu
						</Typography>
					</Box>
				</Paper>
			</Grid>
			<Grid item md={3} sm={12} xs={12}>
				<Paper className={`${classes.card} ${classes.delivCard}`} elevation={3}>
					<Box display='flex' className={`${classes.filter} ${classes.flexHero}`}>
						<Typography variant='h5' className={classes.cardText}>
							Free delivery on orders over $20.
						</Typography>
						<Typography className={classes.cardHeader} variant='h2'>
							Delivery
						</Typography>
					</Box>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default Hero;
