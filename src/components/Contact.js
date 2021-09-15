import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import emailjs from 'emailjs-com';
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: '#EFEFEF',
    borderRadius: '50px',
    minHeight: '60vh',
    margin: '10vh 0px',
  },
  title: {
    fontWeight: '600',
    fontSize: '49px',
    color: 'black',
    fontFamily: 'Shadows Into Light, cursive',
    marginBottom: '70px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '40px',
    },
  },
  rootForm: {
    display: 'flex',
    flexDirection: 'column',
    padding: '70px',
    borderRadius: '20px',
    backgroundColor: '#EFEFEF',
    gap: 10,
    [theme.breakpoints.down('sm')]: {
      padding: '20px',
    },
  },
  label: {
    fontSize: '20px',
    fontFamily: 'Roboto, sans-serif',
  },
  field: {
    backgroundColor: 'white',
    borderRadius: '10px',
    [`& fieldset`]: {
      borderRadius: '10px',
      border: 'none',
    },
  },
  textarea: {
    resize: 'none',
    borderRadius: '10px',
    border: 'none',
    outline: 'none',
    fontSize: '17px',
    fontWeight: '400',
    padding: '15px',
    fontFamily: 'Roboto, sans-serif',
  },
  contactTitle: {
    fontWeight: '400',
    fontSize: '39px',
    color: 'black',
    fontFamily: 'Roboto, sans-serif',
    [theme.breakpoints.down('sm')]: {
      fontSize: '29px',
      marginTop: '20px',
    },
  },
  icon: {
    fontSize: '50px',
  },
  Button: {
    borderRadius: '8px',
    backgroundColor: '#272727',
    color: 'white',
  },
}));
const Contact = () => {
  const classes = useStyles();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_855457b',
        'template_cc9rpjc',
        e.target,
        'user_NEJ4yJzUVTkQqjwAM2nFo'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      className={classes.root}
      alignItems="center"
      id="contactPage"
    >
      <Typography variant="h5" className={classes.title}>
        Contact Me
      </Typography>
      <Grid container md={12}>
        <Grid item md={6} sm={12} xs={12}>
          <form className={classes.rootForm} onSubmit={sendEmail}>
            <label className={classes.label} htmlFor="name">
              Name:
            </label>
            <TextField
              className={classes.field}
              id="name"
              variant="outlined"
              name="name"
            />
            <label className={classes.label} htmlFor="email">
              Email:
            </label>
            <TextField
              className={classes.field}
              id="email"
              variant="outlined"
              name="email"
            />
            <label className={classes.label} htmlFor="message">
              Message:
            </label>
            <textarea
              className={classes.textarea}
              id="message"
              variant="outlined"
              name="message"
            />
            <Button
              type="submit"
              variant="contained"
              className={classes.Button}
            >
              Send
            </Button>
          </form>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Box display="flex" flexDirection="column" padding="0px 50px">
            <Typography className={classes.contactTitle} gutterBottom>
              don’t hesitate to contact me!
            </Typography>
            <Typography paragraph>
              If you like my work then drop me a message using the contact form
              or get in touch using my contact number.
            </Typography>
            <Typography paragraph>See you!</Typography>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gridGap="12px"
            >
              <GitHubIcon
                className={classes.icon}
                alignItems="center"
                gridGap="12px"
              />
              <Typography>Github</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gridGap="12px"
            >
              <LinkedInIcon className={classes.icon} />
              <Typography>LinkedIn</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gridGap="12px"
            >
              <FacebookIcon className={classes.icon} />
              <Typography>Facebook</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gridGap="12px"
            >
              <PhoneAndroidIcon className={classes.icon} />
              <Typography>+668-492-66487</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
