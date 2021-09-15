import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typewriter from 'typewriter-effect';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, Divider, IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: 'black',
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
  logo: {
    fontSize: '23px',
    fontWeight: '600',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: '19px',
    },
  },
  menu: {
    fontSize: '15px',
    fontWeight: '400',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  menuIcon: {
    color: 'white',
    marginRight: '-50PX',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  header: {
    background:
      'linear-gradient(rgba( 0, 0, 0, 0.9), rgba( 0,0,0,0.6)),url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'bottom',
    marginBottom: '50px',
  },

  profileTitle: {
    fontWeight: '400',
    fontSize: '29px',
    color: '#00C2FF',
    lineHeight: '36px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '23px',
    },
  },
  profileName: {
    color: '#FFFAFA',
    fontSize: '41px',
    fontWeight: '600',
    [theme.breakpoints.down('xs')]: {
      fontSize: '25px',
    },
  },
  profileIcon: {
    color: '#FFFAFA',
    gap: '10px',
    marginBottom: '15px',
  },
  profileBtn: {
    background:
      'linear-gradient(180deg, rgba(7, 210, 255, 0.8) 0%, rgba(17, 12, 245, 0.8) 100%)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '45px',
    fontWeight: 'bold',
    fontSize: '24px',
    color: '#FFFAFA',
    width: '250px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '15px',
    },
  },

  projectRoot: {
    width: '100vw',
    height: '80vh',
    backgroundColor: '#EFEFEF',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
  },
}));
const Header = () => {
  const classes = useStyles();
  const [scrolled, setScrolled] = useState(false);

  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        padding="0 50px 0px 35px"
        height="70px"
        className={scrolled ? classes.navbar : ''}
      >
        <Typography className={classes.logo}>
          &lt; Sarawut &frasl; &gt;
        </Typography>
        <Button className={classes.menuIcon}>
          <MenuIcon style={{ fontSize: '35px' }} />
        </Button>
        <Box
          display="flex"
          flexDirection="row"
          gridGap="30px"
          className={classes.menu}
        >
          <Button className={classes.menu}>Home</Button>
          <Button href="#aboutPage" className={classes.menu}>
            About
          </Button>
          <Button href="#skillPage" className={classes.menu}>
            Skill
          </Button>
          <Button href="#projectPage" className={classes.menu}>
            Project
          </Button>
          <Button href="#contactPage" className={classes.menu}>
            Contact
          </Button>
        </Box>
      </Box>
      <Box
        width="100vw"
        height="100vh"
        marginTop="-70px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.header}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography className={classes.profileTitle}>Hello!</Typography>

          <Typography className={classes.profileName} paragraph>
            <Typewriter
              options={{
                cursor: '⎮',
                strings: [
                  'Welcome To My Portfolio!',
                  'I Am Sarawut inpol',
                  'I love coding',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 'natural',
              }}
            />
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            className={classes.profileIcon}
          >
            <FacebookIcon />
            <LinkedInIcon />
            <GitHubIcon />
          </Box>
          <Button href="#contactPage" className={classes.profileBtn}>
            Get in touch
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
