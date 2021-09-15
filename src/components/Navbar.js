import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: 'black',
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
  logo: {
    margin: 'auto',
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
}));
const Navbar = ({ open, setOpen }) => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignitems="center"
      padding="0 50px 0px 35px"
      height="70px"
      className={open ? classes.navbar : ''}
    >
      <Box display="flex">
        {/* {!open && ( */}
        <Typography className={classes.logo} id="homePage">
          &lt; Sarawut &frasl; &gt;
        </Typography>
        {/* )} */}
      </Box>
      <Button className={classes.menuIcon} onClick={() => setOpen(!open)}>
        {open ? (
          <CloseIcon style={{ fontSize: '25px' }} />
        ) : (
          <MenuIcon style={{ fontSize: '35px' }} />
        )}
      </Button>
      <Box
        display="flex"
        flexDirection="row"
        gridgap="30px"
        className={classes.menu}
      >
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
  );
};

export default Navbar;
