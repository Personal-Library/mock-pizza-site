import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

import heroImage from '../../branding/heroImage';
import sidesImage from '../../branding/sides'
import delivImage from '../../branding/delivery';


const useStyles = makeStyles((theme) => ({
  main: {
  },
  card: {
    height: '500px',
    marginTop: '1em',
    textAlign: 'center',
  },
  sidesCard: {
    backgroundImage: `url(${sidesImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    [theme.breakpoints.down("sm")]: {
      height: '200px',
    },
  },
  delivCard: {
    backgroundImage: `url(${delivImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    [theme.breakpoints.down("sm")]: {
      height: '200px',
    },
  },
  mainCard: {
    backgroundImage: `url(${heroImage})`,
  },
}))

const Hero = () => {
  const classes = useStyles();


  return (
    <Grid container spacing={3} className={classes.main}>
      <Grid item md={3} sm={12} xs={12}>
        <Paper className={`${classes.card} ${classes.sidesCard}`} elevation={3}>Sides</Paper>
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <Paper className={`${classes.card} ${classes.mainCard}`} elevation={3}>Main</Paper>
      </Grid>
      <Grid item md={3} sm={12} xs={12}>
        <Paper className={`${classes.card} ${classes.delivCard}`} elevation={3}>Delivery</Paper>
      </Grid>
    </Grid>
  );
}

export default Hero;