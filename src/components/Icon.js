import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  skillTitleIcon: {
    color: 'white',
  },
  skillIcon: {
    cursor: 'pointer',
    width: '60px',
    height: '60px',
    transform: 'perspective(25px) rotateX(0deg) rotateY(0deg) scale(1)',
    transformOrigin: '50% bottom',
    transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      transform: 'perspective(25px) rotateX(0.6deg) rotateY(0.4deg) scale(1.2)',
    },
    [theme.breakpoints.down('xs')]: {
      width: '50px',
      height: '50px',
    },
  },
  skillReact: {
    width: '60px',
    height: '60px',
    animation: '$reactIcon infinite 14s linear',
    [theme.breakpoints.down('xs')]: {
      width: '50px',
      height: '50px',
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

export const ReactIcon = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" alignitems="center">
      <img
        src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png"
        alt=""
        className={classes.skillReact}
      />
    </Box>
  );
};
export const NodeIcon = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" alignitems="center">
      <img
        src="https://bhavya.dev/assets/icons/nodejs.svg"
        alt=""
        className={classes.skillIcon}
      />
    </Box>
  );
};

export const MaterialIcon = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" alignitems="center">
      <img
        src="https://bhavya.dev/assets/icons/materialui.svg"
        alt=""
        className={classes.skillIcon}
      />
    </Box>
  );
};
export const ReduxIcon = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" alignitems="center">
      <img
        src="https://bhavya.dev/assets/icons/redux.svg"
        alt=""
        className={classes.skillIcon}
      />
    </Box>
  );
};
export const JsIcon = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" alignitems="center">
      <img
        src="https://bhavya.dev/assets/icons/javascript.svg"
        alt=""
        className={classes.skillIcon}
      />
    </Box>
  );
};
export const ExpressIcon = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" alignitems="center">
      <img
        src="https://bhavya.dev/assets/icons/expressjs.png"
        alt=""
        className={classes.skillIcon}
      />
    </Box>
  );
};
export const GitIcon = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" alignitems="center">
      <img
        src="https://bhavya.dev/assets/icons/git.svg"
        alt=""
        className={classes.skillIcon}
      />
    </Box>
  );
};
export const GithubIcon = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" alignitems="center">
      <img
        src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_github_2-256.png"
        alt=""
        className={classes.skillIcon}
      />
    </Box>
  );
};
export const MongoIcon = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" alignitems="center">
      <img
        src="https://bhavya.dev/assets/icons/mongodb.svg"
        alt=""
        className={classes.skillIcon}
      />
    </Box>
  );
};
export const MysqlIcon = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" alignitems="center">
      <img
        src="https://cdn1.iconfinder.com/data/icons/programing-development-7/24/mysql_database_logo_data_base-512.png"
        alt=""
        className={classes.skillIcon}
      />
    </Box>
  );
};
export const HtmlIcon = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" alignitems="center">
      <img
        src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-256.png"
        alt=""
        className={classes.skillIcon}
      />
    </Box>
  );
};
export const CssIcon = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" alignitems="center">
      <img
        src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
        alt=""
        className={classes.skillIcon}
      />
    </Box>
  );
};
export const FirebaseIcon = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" alignitems="center">
      <img
        src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
        alt=""
        className={classes.skillIcon}
      />
    </Box>
  );
};

export const FigmaIcon = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" alignitems="center">
      <img
        src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-256.png"
        alt=""
        className={classes.skillIcon}
      />
    </Box>
  );
};
