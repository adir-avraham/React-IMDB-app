import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from "react-router-dom";
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';




export default class Navbar extends React.Component<any, any> {


  render() {

    return (

      <div>
        <CssBaseline />
        <AppBar position="static" color="default" elevation={0} style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
          <Toolbar style={{ flexWrap: 'wrap' }}>
            <Typography align="left" variant="h6" color="inherit" noWrap style={{ flexGrow: 1 }}>
              IMDB APP</Typography>
            <nav>
              <Link to="/home-page" color="textPrimary" style={{ margin: 2 }}>
                <Button> HOME </Button>
              </Link>
              <Link to="/movies-page" color="textPrimary" style={{ margin: 2 }}>
                <Button> MOVIES </Button>
              </Link>
              <Link to='/feedback/' color="textPrimary" style={{ margin: 2 }}>
                <Button> FEEDBACKS </Button>
              </Link>   
              <Link to='/favourites/' color="textPrimary" style={{ margin: 2 }}>
                <Button> FAVOURITES </Button>
              </Link>
              <Link to='/add-new-arriaval/' color="textPrimary" style={{ margin: 2 }}>
                <Button> Add new arrivals </Button>
              </Link>
              <Link to='/new-arriavals/' color="textPrimary" style={{ margin: 2 }}>
                <Button>New arrivals </Button>
              </Link>      
              <Link to='/serieses-page/' color="textPrimary" style={{ margin: 2 }}>
                <Button> Serieses </Button>
              </Link>
              <Link to='/games-page' color="textPrimary" style={{margin: 2}}>
                <Button> Video games </Button>  
              </Link>               
            </nav>
            <Button href="https://www.imdb.com/" target="_blanck" color="primary" variant="outlined" style={{ margin: 2 }}>
              IMDB
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}