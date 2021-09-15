import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
const useStyles = makeStyles((theme) => ({
  rootAbout: {
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
    margin: '50px 0px 150px 0px',
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '50px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItem: 'center',
      gap: '20px',
    },
  },
  aboutImg: {
    width: '500px',
    height: '550px',
    borderRadius: '20px',
    [theme.breakpoints.only('sm')]: {
      width: '400px',
      height: '450px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '230px',
      height: '230px',
    },
  },
  aboutTitle: {
    fontWeight: '400',
    fontSize: '49px',
    color: 'black',
    fontFamily: 'Shadows Into Light, cursive',
    marginBottom: '30px',
    [theme.breakpoints.only('sm')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
      textAlign: 'center',
      marginBottom: '10px',
    },
  },
  aboutDesc: {
    fontWeight: '400',
    fontSize: '21px',
    color: 'black',
    fontFamily: 'Roboto, sans-serif',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
      textAlign: 'center',
    },
  },
}));
const AboutProfile = () => {
  const classes = useStyles();
  const [started, setStarted] = useState(false);
  useEffect(() => {
    setStarted(true);
  }, []);
  return (
    <Box className={classes.rootAbout} id="aboutPage">
      <Box className={classes.root}>
        <Slide direction="right" in={started} mountOnEnter unmountOnExit>
          <Box display="flex" alignItems="center" justifyContent="center">
            <img
              src="/images/profile.jpg"
              alt=""
              className={classes.aboutImg}
            />
          </Box>
        </Slide>
        <Fade in={started}>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Typography className={classes.aboutTitle}>
              I Am Fullstack Web Developer
            </Typography>
            <Typography className={classes.aboutDesc} paragraph>
              Hello, my name is Sarawut. I recently discovered myself that I
              have a passion for coding. I spend more than 70% of my free time
              each day learning to develop web applications on my own. I can
              develop multiple projects. by trying to do my best My goal is to
              be a great developer and I will do it.
            </Typography>
            <Typography
              className={classes.aboutDesc}
              style={{ textAlign: 'start', paddingLeft: '10px' }}
            >
              age : <b>21</b> <br />
              Email : <b> beerzii.4321@gmail.com</b>
              <br />
              Phone : <b>+668-492-66487</b>
            </Typography>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default AboutProfile;
