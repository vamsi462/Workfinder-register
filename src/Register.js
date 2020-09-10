import React from 'react';
import {Avatar,Button,CssBaseline,TextField,Paper,Grid} from '@material-ui/core';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Worker from './worker.jpg'
import MainFeaturedPost from './MainFeaturedPost';
import SimpleSelect from './CheckBox';

import axios from  'axios'



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1592466404019-2dea49115b75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegisterForm() {
  const classes = useStyles();
   const [state, setState] = React.useState({
     name:'',
     about:'',
     aadharNumber:'',
     mobileNumber:'',
     

   });

  const handleChange=(event)=>{
    // axios.post('http://api.codolyte.com/workfinder/api/register', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    const{name,about,aadharNumber,mobileNumber}= state;
    event.preventDefault()
    setState({...state,[event.target.id]:event.target.value})
    console.log(name,about,aadharNumber,mobileNumber)
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <ContactMailIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
             Register Here!!
          </Typography>
          <form className={classes.form}  onSubmit={handleChange} >
          <TextField
              type="text"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
          onChange={handleChange}
            />
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="About"
              label="Say Something About you"
              name="about"  
              onChange={handleChange}
            />
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="aadhar"
              label="Enter Aadhar number"
              name="aadharNumber"  
              onChange={handleChange}
            />
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="mobile"
              label="Enter mobile number"
              name="mobileNumber"  
              onChange={handleChange}
            />
          <SimpleSelect/>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
             
            >

            Register
            </Button>
           
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
      <MainFeaturedPost/>
        </Grid>

    </Grid>
   
  );
}

