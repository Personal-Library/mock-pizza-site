import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Icon } from '@material-ui/core';
import logo from '../../branding/logo.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	icon: {
		fontSize: 'large',
		color: 'white',
	},
	logo: {
		height: '70px',
		marginRight: theme.spacing(2),
		cursor: 'pointer',
	},
	menuBtn: {
		color: 'white',
	},
}));

const NavBar = () => {
	const classes = useStyles();
	const matches = useMediaQuery('(min-width:900px');
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const buttons = ['Order Online', 'Menu', 'Coupons', 'Tracker', 'Rewards', 'Login'];

	const menuButton = (
		<div>
			<Button
				className={classes.menuBtn}
				aria-controls='simple-menu'
				aria-haspopup='true'
				onClick={handleClick}
			>
				Menu
			</Button>
			<Menu
				id='simple-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{buttons.map((button, index) => {
					return (
						<MenuItem onClick={handleClose} value={button} key={index}>
							{button}
						</MenuItem>
					);
				})}
			</Menu>
		</div>
	);

	const renderedButtons = buttons.map((button, index) => {
		return (
			<Button color='inherit' value={button} key={index}>
				{button}
			</Button>
		);
	});

	return (
		<AppBar position='static'>
			<Toolbar>
				<img src={logo} alt='logo' className={classes.logo} />
				<Typography variant='h6' className={classes.title}>
					The. Best. Pies.
				</Typography>
				{matches ? renderedButtons : menuButton}
				<Button>
					<Icon className={classes.icon}>shopping_cart</Icon>
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
