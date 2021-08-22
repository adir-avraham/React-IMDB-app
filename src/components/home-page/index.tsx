import Header from '../header'
import React from 'react'
import { Button, Grid, Paper } from '@material-ui/core';
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default class HomePage extends React.Component<any, any> {


    render() {


        return (
            <div>
                <Header title="HOME PAGE" style={{ margin: "50px"}} />
                <Container maxWidth="md">
                  <Grid container
                  direction="row"
                  justify-content="space-evenly"
                  alignItems="center"
            
                  spacing={3}
                  >
                    <Grid item xs={12} sm={6} md={4}>
                        <Link to="/home-page"  style={{ textDecoration: "none" }}>
                            <Button fullWidth variant="contained" size="large" > HOME </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
              <Link to="/movies-page" color="textPrimary" style={{ textDecoration: "none" }}>
                <Button fullWidth variant="contained" size="large" > MOVIES </Button>
              </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
              <Link to='/feedback/' color="textPrimary" style={{ textDecoration: "none" }}>
                <Button fullWidth variant="contained" size="large" > FEEDBACKS </Button>
              </Link>   
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
              <Link to='/favourites/' color="textPrimary" style={{ textDecoration: "none" }}>
                <Button fullWidth variant="contained" size="large"> FAVOURITES </Button>
              </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
              <Link to='/add-new-arriaval/' color="textPrimary" style={{ textDecoration: "none" }}>
                <Button fullWidth variant="contained" size="large"> Add new arrivals </Button>
              </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
              <Link to='/new-arriavals/' color="textPrimary" style={{ textDecoration: "none" }}>
                <Button fullWidth variant="contained" size="large" >New arrivals </Button>
              </Link>    
              </Grid>
              <Grid item xs={12} sm={6} md={4}>  
              <Link to='/serieses-page/' color="textPrimary" style={{ textDecoration: "none" }}>
                <Button fullWidth variant="contained" size="large" > Serieses </Button>
              </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
              <Link to='/games-page' color="textPrimary" style={{ textDecoration: "none"}}>
                <Button fullWidth variant="contained" size="large" > Video games </Button>  
              </Link>    
              </Grid>           
            </Grid>
            
        </Container>
            </div>
        )
    }
}