import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typewriter from 'typewriter-effect';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
  menuBox: {
    width: '100vw',
    display: 'flex',
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  list: {
    width: '100vw',
    height: '50px',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    animation: '$menuDrop 1 0.5s ease-in-out',
  },
  '@keyframes menuDrop': {
    from: {
      height: '0px',
    },
    to: {
      height: '50px',
    },
  },
  text: {
    margin: 'auto',
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
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar open={open} setOpen={setOpen} />
      <Box
        className={classes.menuBox}
        style={{ display: open ? 'flex' : 'none' }}
      >
        <a href="#aboutPage" className="link">
          <Box className={classes.list}>
            <Typography className={classes.text}>About</Typography>
          </Box>
        </a>
        <a href="#skillPage" className="link">
          <Box className={classes.list}>
            <Typography className={classes.text}>Skill</Typography>
          </Box>
        </a>
        <a href="#projectPage" className="link">
          <Box className={classes.list}>
            <Typography className={classes.text}>Project</Typography>
          </Box>
        </a>
        <a href="#contactPage" className="link">
          <Box className={classes.list}>
            <Typography className={classes.text}>Contact</Typography>
          </Box>
        </a>
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
            <a href="https://www.facebook.com/sarawut.inpol/" className="link">
              <FacebookIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/sarawut-inpol-95880b218/"
              className="link"
            >
              <LinkedInIcon />
            </a>
            <a href="https://github.com/beerth21624" className="link">
              <GitHubIcon />
            </a>
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
