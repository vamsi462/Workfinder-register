import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPostContent: {
    margin: 0,
    color:'white',
    position: 'absolute',
    top: '50%',
    left: '69%',
    marginRight: '-60%',
    transform: 'translate(-50%, -50%)' 
   
  },
}));

export default function MainFeaturedPost() {
  const classes = useStyles();
  return ( 
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" >
                   Welcome to WorkFinder
            </Typography>
            <Typography variant="h6"  color="inherit" >
                   create your own account here!!!
            </Typography>
          </div>
        </Grid>
      </Grid>
      
  );
}
