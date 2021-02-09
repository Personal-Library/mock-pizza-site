import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    height: '300px',
    marginTop: '40px',
    backgroundColor: '#E0E0E0',
  },
}))

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.main}>

    </Grid>
  );
}

export default Footer;