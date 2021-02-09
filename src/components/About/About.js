import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

import ownerImage from '../../branding/about';

const useStyles = makeStyles((theme) => ({
  main: {
  },
  card: {
    height: '500px',
    marginTop: '1em',
    textAlign: 'center',
  },
  ownerCard: {
    backgroundImage: `url(${ownerImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }
}))

const About = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.main}>
      <Grid item md={7} sm={12} xs={12}>
        <Paper className={`${classes.card} ${classes.ownerCard}`} elevation={3}>Owner Image</Paper>
      </Grid>
      <Grid item md={5} sm={12} xs={12}>
        <Paper className={classes.card} elevation={3}>About Us</Paper>
      </Grid>
    </Grid>
  );
}

export default About;