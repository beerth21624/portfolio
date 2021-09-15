import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Container, Typography } from '@material-ui/core';
import {
  ReactIcon,
  NodeIcon,
  MongoIcon,
  MaterialIcon,
  FirebaseIcon,
} from './Icon';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: '59px',
    color: 'black',
    fontFamily: 'Shadows Into Light, cursive',
    margin: '100px auto 150px auto',
    [theme.breakpoints.down('sm')]: {
      margin: '80px auto 50px auto',
      fontSize: '49px',
    },
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '100px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItem: 'center',
      marginBottom: '50px',
    },
  },
  img: {
    [theme.breakpoints.only('md')]: {
      maxWidth: '580px',
      maxHeight: '350px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    },
  },
  projectName: {
    fontWeight: '400',
    fontSize: '49px',
    color: 'black',
    fontFamily: 'Shadows Into Light, cursive',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '35px',
    },
  },
  projectDesc: {
    fontWeight: '400',
    fontSize: '21px',
    color: 'black',
    fontFamily: 'Roboto, sans-serif',
    [theme.breakpoints.only('sm')]: {
      marginBottom: '25px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '15px',
      marginBottom: '25px',
    },
  },
  iconBox: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  button: {
    color: 'gray',
  },
  order1: {
    [theme.breakpoints.down('sm')]: {
      order: 1,
    },
  },
  order2: {
    [theme.breakpoints.down('sm')]: {
      order: 2,
    },
  },
}));
const SkillIcon = () => {
  const classes = useStyles();
  return (
    <Container maxWidth={'lg'} className={classes.root} id="projectPage">
      <Typography variant="h5" className={classes.title}>
        Project
      </Typography>
      <Box className={classes.box}>
        <Box
          display="flex"
          flexDirection="column"
          padding="10px"
          className={classes.order2}
        >
          <Typography variant="h5" className={classes.projectName}>
            Camp Memo Project
          </Typography>
          <Typography variant="caption" className={classes.projectDesc}>
            This is a project I created to learn an overview of web application
            development. Inspired by my passion who do not want the story of the
            fun of camping to disappear So I built{' '}
            <strong>the camp memo</strong> . In order to save special memories
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            gridGap="20px"
            className={classes.iconBox}
          >
            <ReactIcon />
            <NodeIcon />
            <MongoIcon />
            <MaterialIcon />
            <FirebaseIcon />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            gridGap="20px"
            marginTop="30px"
            className={classes.iconBox}
          >
            <Button
              href="https://github.com/beerth21624/campmemo"
              className={classes.button}
            >
              Source code
            </Button>
            <Button
              href="https://campmemo.herokuapp.com/"
              className={classes.button}
            >
              view website
            </Button>
          </Box>
        </Box>
        <Box className={classes.order1}>
          <img className={classes.img} src="/images/project1.png" alt=" " />
        </Box>
      </Box>

      {/* card2 */}
      <Box className={classes.box}>
        <Box>
          <img className={classes.img} src="/images/project2.png" alt=" " />
        </Box>
        <Box display="flex" flexDirection="column" padding="10px">
          <Typography variant="h5" className={classes.projectName}>
            Popcorn Project
          </Typography>
          <Typography variant="caption" className={classes.projectDesc}>
            This site was inspired by the popular site popcat. When I played
            popcat I thought why Thailand didn't have some. So I created a
            popcorn web.
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            gridGap="20px"
            className={classes.iconBox}
          >
            <ReactIcon />
            <NodeIcon />
            <MongoIcon />
            <MaterialIcon />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            gridGap="20px"
            marginTop="30px"
            className={classes.iconBox}
          >
            <Button
              href="https://github.com/beerth21624/Memo-popcorn"
              className={classes.button}
            >
              Source code
            </Button>
          </Box>
        </Box>
      </Box>
      {/* card3 */}
      <Box className={classes.box}>
        <Box
          display="flex"
          flexDirection="column"
          padding="10px"
          className={classes.order2}
        >
          <Typography variant="h5" className={classes.projectName}>
            Portfolio Project
          </Typography>
          <Typography variant="caption" className={classes.projectDesc}>
            This project is the same website as this website. Made to collect
            the work I've developed.
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            gridGap="20px"
            className={classes.iconBox}
          >
            <ReactIcon />
            <MaterialIcon />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            gridGap="20px"
            marginTop="30px"
            className={classes.iconBox}
          >
            <Button
              href="https://github.com/beerth21624/Memo-popcorn"
              className={classes.button}
            >
              Source code
            </Button>
          </Box>
        </Box>
        <Box className={classes.order1}>
          <img className={classes.img} src="/images/project3.png" alt=" " />
        </Box>
      </Box>
    </Container>
  );
};

export default SkillIcon;
