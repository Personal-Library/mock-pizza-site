import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

import specialLeftImage from '../../branding/specialleft';
import specialRightImage from '../../branding/specialright';

const useStyles = makeStyles((theme) => ({
  main: {
  },
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
}))

const MainContent = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.main}>
      <Grid item md={5} sm={12} xs={12}>
        <Paper className={`${classes.card} ${classes.leftCard}`} elevation={3}>Specialty1</Paper>
      </Grid>
      <Grid item md={7} sm={12} xs={12}>
        <Paper className={`${classes.card} ${classes.rightCard}`} elevation={3}>Specialty2</Paper>
      </Grid>
    </Grid>
  );
}

export default MainContent;