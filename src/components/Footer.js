import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    minHeight: '25vh',
    backgroundColor: '#EFEFEF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: '30px',
    fontWeight: '600',
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.name} gutterBottom>
        Sarawut Inpol
      </Typography>
      <Typography paragraph>Fullstack developer</Typography>
      <Typography variant="subtitle1">{'Copyright © '}beerResume</Typography>
      <Typography variant="caption">Design-Sarawut Inpol</Typography>
    </Box>
  );
};

export default Footer;
