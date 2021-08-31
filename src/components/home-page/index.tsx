import Header from '../header'
import React from 'react'
import { Grid, Paper } from '@material-ui/core';
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MovieCreationOutlinedIcon from '@material-ui/icons/MovieCreationOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import NewReleasesOutlinedIcon from '@material-ui/icons/NewReleasesOutlined';
import TvOutlinedIcon from '@material-ui/icons/TvOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';


export default class HomePage extends React.Component<any, any> {


    render() {


        return (
            <div>
                <Header title="HOME PAGE" style={{ margin: "50px"}} />
                <Container maxWidth="sm">
                  <Grid container
                  direction="row"
                  justify-content="space-evenly"
                  alignItems="stretch"
              
                  spacing={2}
                  >
                    <Grid item xs={6} sm={6} md={8}>
                        
                        <Link to="/home-page" style={{ textDecoration: "none" }}>
                            <Paper style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "2.4rem 1.2rem"}}>
                            <HomeOutlinedIcon color="secondary"/>
                    
                               HOME </Paper>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={6} md={4}>
              <Link to="/movies-page" color="textPrimary" style={{ textDecoration: "none" }}>
                <Paper style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "2.4rem 1.2rem"}} 
                >
                <MovieCreationOutlinedIcon color="secondary"/>
                
                   MOVIES </Paper>
              </Link>
              </Grid>
              <Grid item xs={6} sm={6} md={4}>
              <Link to='/feedback/' color="textPrimary" style={{ textDecoration: "none" }}>
                <Paper style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "2.4rem 1.2rem"}} >
                <ChatOutlinedIcon color="secondary"/>
                   FEEDBACKS </Paper>
              </Link>   
              </Grid>
              <Grid item xs={6} sm={6} md={4}>
              <Link to='/favourites/' color="textPrimary" style={{ textDecoration: "none"}}>
                <Paper style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "2.4rem 1.2rem"}}> 
                <FavoriteBorderOutlinedIcon color="secondary"/>
                FAVOURITES </Paper>
              </Link>
              </Grid>
              <Grid item xs={6} sm={6} md={4}>
              <Link to='/add-new-arriaval/' color="textPrimary" style={{ textDecoration: "none" }}>
                <Paper style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "2.4rem 1.2rem"}} >
                  <AddBoxOutlinedIcon color="secondary"/>
                   ADD ARRIVALS </Paper>
              </Link>
              </Grid>
              <Grid item xs={6} sm={6} md={4}>
              <Link to='/new-arriavals/' color="textPrimary" style={{ textDecoration: "none" }}>
                <Paper style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "2.4rem 1.2rem"}} >
                  <NewReleasesOutlinedIcon color="secondary"/>
                  NEW ARRIVALS</Paper>
              </Link>    
              </Grid>
              <Grid item xs={6} sm={6} md={4}>  
              <Link to='/seriess-page/' color="textPrimary" style={{ textDecoration: "none" }}>
                <Paper  style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "2.4rem 1.2rem"}} >
                  <TvOutlinedIcon color="secondary"/>
                   SERIES</Paper>
              </Link>
              </Grid>
              <Grid item xs={6} sm={6} md={4}>
              <Link to='/games-page' color="textPrimary" style={{ textDecoration: "none"}}>
                <Paper style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "2.4rem 1.2rem"}} >
                  <SportsEsportsOutlinedIcon color="secondary"/>
                   VIDEO GAMES</Paper>  
              </Link>    
              </Grid>           
            </Grid>
            
        </Container>
            </div>
        )
    }
}



// import Header from '../header'
// import React from 'react'
// import { Button, Grid, Paper } from '@material-ui/core';
// import { Link } from "react-router-dom";
// import Container from '@material-ui/core/Container';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
// import MovieCreationOutlinedIcon from '@material-ui/icons/MovieCreationOutlined';
// export default class HomePage extends React.Component<any, any> {


//     render() {


//         return (
//             <div>
//                 <Header title="HOME PAGE" style={{ margin: "50px"}} />
//                 <Container maxWidth="md">
//                   <Grid container
//                   direction="row"
//                   justify-content="space-evenly"
//                   alignItems="center"
              
//                   spacing={3}
//                   >
//                     <Grid item xs={12} sm={6} md={8}>
                        
//                         <Link to="/home-page"  style={{ textDecoration: "none" }}>
//                             <Button fullWidth variant="contained" size="large" >
//                             <HomeOutlinedIcon/>
                    
//                                HOME </Button>
//                         </Link>
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4}>
//               <Link to="/movies-page" color="textPrimary" style={{ textDecoration: "none" }}>
//                 <Button fullWidth variant="contained" size="large" 
//                 >
//                 <MovieCreationOutlinedIcon/>
                
//                    MOVIES </Button>
//               </Link>
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//               <Link to='/feedback/' color="textPrimary" style={{ textDecoration: "none" }}>
//                 <Button fullWidth variant="contained" size="large" > FEEDBACKS </Button>
//               </Link>   
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//               <Link to='/favourites/' color="textPrimary" style={{ textDecoration: "none" }}>
//                 <Button fullWidth variant="contained" size="large"> FAVOURITES </Button>
//               </Link>
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//               <Link to='/add-new-arriaval/' color="textPrimary" style={{ textDecoration: "none" }}>
//                 <Button fullWidth variant="contained" size="large"> Add new arrivals </Button>
//               </Link>
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//               <Link to='/new-arriavals/' color="textPrimary" style={{ textDecoration: "none" }}>
//                 <Button fullWidth variant="contained" size="large" >New arrivals </Button>
//               </Link>    
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>  
//               <Link to='/seriess-page/' color="textPrimary" style={{ textDecoration: "none" }}>
//                 <Button fullWidth variant="contained" size="large" > Series </Button>
//               </Link>
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//               <Link to='/games-page' color="textPrimary" style={{ textDecoration: "none"}}>
//                 <Button fullWidth variant="contained" size="large" > Video games </Button>  
//               </Link>    
//               </Grid>           
//             </Grid>
            
//         </Container>
//             </div>
//         )
//     }
// }