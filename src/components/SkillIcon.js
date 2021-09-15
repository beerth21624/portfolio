import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Grow from '@material-ui/core/Grow';
const useStyles = makeStyles((theme) => ({
  skillBox: {
    background:
      'linear-gradient(rgba( 0, 0, 0, 0.8), rgba( 0,0,0,0.6)),url(https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    height: '45vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px',
    borderRadius: '20px',
    [theme.breakpoints.only('lg')]: {
      height: '48vh',
      padding: '40px',
    },
    [theme.breakpoints.only('md')]: {
      height: '60vh',
      padding: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '70vh',
      padding: '10px',
    },
  },
  skillTitle: {
    fontFamily: 'Shadows Into Light, cursive',
    fontWeight: '600',
    fontSize: '49px',
    color: 'white',
    [theme.breakpoints.only('md')]: {
      fontSize: '40px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '34px',
    },
  },
  iconSkillBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '47vw',
    gap: '50px',
    marginTop: '50px',
    [theme.breakpoints.only('lg')]: {
      width: '60vw',
      gap: '40px',
    },
    [theme.breakpoints.only('md')]: {
      width: '80vw',
      gap: '40px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90vw',
      gap: '20px',
    },
  },
  skillTitleIcon: {
    color: 'white',
  },
  skillIcon: {
    width: '60px',
    height: '60px',
    transform: 'perspective(25px) rotateX(0deg) rotateY(0deg) scale(1)',
    transformOrigin: '50% bottom',
    transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      transform: 'perspective(25px) rotateX(0.6deg) rotateY(0.4deg) scale(1.2)',
    },
    [theme.breakpoints.down('lg')]: {
      width: '55px',
      height: '55px',
    },
  },
  skillReact: {
    width: '60px',
    height: '60px',
    animation: '$reactIcon infinite 14s linear',
    [theme.breakpoints.down('lg')]: {
      width: '55px',
      height: '55px',
    },
  },
  '@keyframes reactIcon': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
}));
const SkillIcon = () => {
  const classes = useStyles();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setStarted(true);
  }, []);
  return (
    <Box className={classes.skillBox} id="skillPage">
      <Typography className={classes.skillTitle}>My skills</Typography>
      <Box className={classes.iconSkillBox}>
        <Grow in={started}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="caption"
              paragraph
              className={classes.skillTitleIcon}
            >
              React
            </Typography>
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png"
              alt=""
              className={classes.skillReact}
            />
          </Box>
        </Grow>
        <Grow
          in={started}
          style={{ transformOrigin: '0 0 0' }}
          {...(started ? { timeout: 500 } : {})}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="caption"
              paragraph
              className={classes.skillTitleIcon}
            >
              Node.js
            </Typography>
            <img
              src="https://bhavya.dev/assets/icons/nodejs.svg"
              alt=""
              className={classes.skillIcon}
            />
          </Box>
        </Grow>
        <Grow
          in={started}
          style={{ transformOrigin: '0 0 0' }}
          {...(started ? { timeout: 1000 } : {})}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="caption"
              paragraph
              className={classes.skillTitleIcon}
            >
              Material-UI
            </Typography>
            <img
              src="https://bhavya.dev/assets/icons/materialui.svg"
              alt=""
              className={classes.skillIcon}
            />
          </Box>
        </Grow>
        <Grow
          in={started}
          style={{ transformOrigin: '0 0 0' }}
          {...(started ? { timeout: 1500 } : {})}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="caption"
              paragraph
              className={classes.skillTitleIcon}
            >
              Redux
            </Typography>
            <img
              src="https://bhavya.dev/assets/icons/redux.svg"
              alt=""
              className={classes.skillIcon}
            />
          </Box>
        </Grow>
        <Grow
          in={started}
          style={{ transformOrigin: '0 0 0' }}
          {...(started ? { timeout: 2000 } : {})}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="caption"
              paragraph
              className={classes.skillTitleIcon}
            >
              Javascript
            </Typography>
            <img
              src="https://bhavya.dev/assets/icons/javascript.svg"
              alt=""
              className={classes.skillIcon}
            />
          </Box>
        </Grow>
        <Grow
          in={started}
          style={{ transformOrigin: '0 0 0' }}
          {...(started ? { timeout: 2500 } : {})}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="caption"
              paragraph
              className={classes.skillTitleIcon}
            >
              Express.js
            </Typography>
            <img
              src="https://bhavya.dev/assets/icons/expressjs.png"
              alt=""
              className={classes.skillIcon}
            />
          </Box>
        </Grow>
        <Grow
          in={started}
          style={{ transformOrigin: '0 0 0' }}
          {...(started ? { timeout: 3000 } : {})}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="caption"
              paragraph
              className={classes.skillTitleIcon}
            >
              Git
            </Typography>
            <img
              src="https://bhavya.dev/assets/icons/git.svg"
              alt=""
              className={classes.skillIcon}
            />
          </Box>
        </Grow>
        <Grow
          in={started}
          style={{ transformOrigin: '0 0 0' }}
          {...(started ? { timeout: 3500 } : {})}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="caption"
              paragraph
              className={classes.skillTitleIcon}
            >
              GitHub
            </Typography>
            <img
              src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_github_2-256.png"
              alt=""
              className={classes.skillIcon}
            />
          </Box>
        </Grow>
        <Grow
          in={started}
          style={{ transformOrigin: '0 0 0' }}
          {...(started ? { timeout: 4000 } : {})}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="caption"
              paragraph
              className={classes.skillTitleIcon}
            >
              MongoDB
            </Typography>
            <img
              src="https://bhavya.dev/assets/icons/mongodb.svg"
              alt=""
              className={classes.skillIcon}
            />
          </Box>
        </Grow>
        <Grow
          in={started}
          style={{ transformOrigin: '0 0 0' }}
          {...(started ? { timeout: 4500 } : {})}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="caption"
              paragraph
              className={classes.skillTitleIcon}
            >
              MySql
            </Typography>
            <img
              src="https://cdn1.iconfinder.com/data/icons/programing-development-7/24/mysql_database_logo_data_base-512.png"
              alt=""
              className={classes.skillIcon}
            />
          </Box>
        </Grow>
        <Grow
          in={started}
          style={{ transformOrigin: '0 0 0' }}
          {...(started ? { timeout: 5000 } : {})}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="caption"
              paragraph
              className={classes.skillTitleIcon}
            >
              HTML
            </Typography>
            <img
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-256.png"
              alt=""
              className={classes.skillIcon}
            />
          </Box>
        </Grow>
        <Grow
          in={started}
          style={{ transformOrigin: '0 0 0' }}
          {...(started ? { timeout: 5500 } : {})}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="caption"
              paragraph
              className={classes.skillTitleIcon}
            >
              CSS
            </Typography>
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
              alt=""
              className={classes.skillIcon}
            />
          </Box>
        </Grow>
        <Grow
          in={started}
          style={{ transformOrigin: '0 0 0' }}
          {...(started ? { timeout: 6000 } : {})}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="caption"
              paragraph
              className={classes.skillTitleIcon}
            >
              Firebase
            </Typography>
            <img
              src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
              alt=""
              className={classes.skillIcon}
            />
          </Box>
        </Grow>
        <Grow
          in={started}
          style={{ transformOrigin: '0 0 0' }}
          {...(started ? { timeout: 6500 } : {})}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="caption"
              paragraph
              className={classes.skillTitleIcon}
            >
              Figma
            </Typography>
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-256.png"
              alt=""
              className={classes.skillIcon}
            />
          </Box>
        </Grow>
      </Box>
    </Box>
  );
};

export default SkillIcon;
