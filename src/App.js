import { Box, Button, Container, Hidden, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import Header from './components/Header';
import SkillIcon from './components/SkillIcon';
import AboutProfile from './components/AboutProfile';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import Footer from './components/Footer';
const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '100vw',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Container maxWidth={'lg'}>
        <AboutProfile />
        <SkillIcon />
        <ProjectCard />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
