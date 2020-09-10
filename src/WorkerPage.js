import React, { Component } from 'react'
import {AppBar,Button,Typography,Link,nav,Toolbar,Container,CssBaseline} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ActiveWorks from './ActiveWorks'
import OngoingWorks from './OngoingWorks';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import data from "./Data";
import Context from "./Context";
import {
    Route,
    NavLink,
    HashRouter,
    Redirect,
    BrowserRouter
  } from "react-router-dom";




class Completed extends Component {
    render() {
        return (
            <div>
                <h1>completed</h1>
            </div>
        )
    }
}
const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
  }));
  
  const tiers = [
    {
      title: 'Free',
      price: '0',
      description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
      buttonText: 'Sign up for free',
      buttonVariant: 'outlined',
    },
    {
      title: 'Pro',
      subheader: 'Most popular',
      price: '15',
      description: [
        '20 users included',
        '10 GB of storage',
        'Help center access',
        'Priority email support',
      ],
      buttonText: 'Get started',
      buttonVariant: 'contained',
    },
    {
      title: 'Enterprise',
      price: '30',
      description: [
        '50 users included',
        '30 GB of storage',
        'Help center access',
        'Phone & email support',
      ],
      buttonText: 'Contact us',
      buttonVariant: 'outlined',
    },
  ];
  
  export default function WorkerPage() {
    const classes = useStyles();
  
    return (
        <BrowserRouter>
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h4" color="inherit" noWrap className={classes.toolbarTitle}>
             WorkFinder
            </Typography>
            <nav>
{/*            
            <Link  variant="button" color="inherit" className={classes.link}><NavLink to="/">Active</NavLink></Link>
            <Link  variant="button" color="inherit" className={classes.link}><NavLink to="/ongoing">Ongoing</NavLink></Link>
            <Link  variant="button" color="inherit" className={classes.link}><NavLink to="/completed">completed</NavLink></Link> */}
            <Link variant="button" color="inherit" href="/" className={classes.link}>
             Active
            </Link>
            <Link variant="button" color="inherit"  href="/ongoing" className={classes.link}>
             Ongoing
            </Link>
            <Link variant="button" color="inherit" href="/completed" className={classes.link}>
             Completed
            </Link>
            </nav>
           <AssignmentIndIcon/>
          </Toolbar>
        </AppBar>
        <div className="content">
            <Route exact path="/" component={ActiveWorks}/>
            <Route  exact path="/ongoing" component={OngoingWorks}>
           </Route>
            <Route  exact path="/completed" component={Completed}/>
          </div>
    </React.Fragment>
    </BrowserRouter>

  );
}