import React from 'react';
import { Box, Grid, Container, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	main: {
		height: '250px',
		marginTop: '40px',
		backgroundColor: '#E0E0E0',
		[theme.breakpoints.down('sm')]: {
			height: '400px',
		},
		[theme.breakpoints.down('xs')]: {
			height: '550px',
		},
	},
	footerBox: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingTop: '2rem',
		textDecoration: 'none',
		[theme.breakpoints.down('xs')]: {
			alignItems: 'center',
		},
	},
	footerTitle: {
		paddingBottom: '1rem',
	},
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<Box className={classes.main}>
			<Container>
				<Grid container>
					<Grid item md={4} sm={6} xs={12}>
						<Box className={classes.footerBox}>
							<Typography className={classes.footerTitle} variant='h4'>
								Our Company
							</Typography>
							<Link href='#'>About Concord Pizza</Link>
							<Link href='#'>Investor Relations</Link>
							<Link href='#'>Careers</Link>
							<Link href='#'>No Contact Delivery</Link>
						</Box>
					</Grid>
					<Grid item md={4} sm={6} xs={12}>
						<Box className={classes.footerBox}>
							<Typography className={classes.footerTitle} variant='h4'>
								Our Pizza
							</Typography>
							<Link href='#'>Nutritional Info</Link>
							<Link href='#'>Allergen Guide</Link>
							<Link href='#'>Ingredients</Link>
							<Link href='#'>Quality Guarantee</Link>
						</Box>
					</Grid>
					<Grid item md={4} sm={6} xs={12}>
						<Box className={classes.footerBox}>
							<Typography className={classes.footerTitle} variant='h4'>
								Help
							</Typography>
							<Link href='#'>Customer Service</Link>
							<Link href='#'>Ordering</Link>
							<Link href='#'>Gift Cards</Link>
							<Link href='#'>Store List</Link>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;
