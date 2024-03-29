import { addMovieToFavouritesAction, deleteMovieFromFavouritesAction } from '../../redux/actions'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Fade } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import { connect } from 'react-redux'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'; 
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Divider from '@material-ui/core/Divider';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export class Movie extends React.Component<any, any> {
  state = {
    likeBtn: false
  }
  
  render() {
    const { Title, Year, imdbID, Type, Poster, favourites } = this.props
    const defaultPicture = "https://images.immediate.co.uk/production/volatile/sites/3/2017/11/imagenotavailable1-39de324.png?quality=90&resize=620,413"
    let src = null;
    if (Poster === "N/A") {
      src = defaultPicture
    } else {
      src = Poster
    }

    return (
      <Grid item xs={12} sm={6} md={4}>
                <Fade 
          in={true}
     
          {...(true ? { timeout: 1500 } : {})}
        >

        <Card style={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
          <CardMedia
            style={{ paddingTop: '56.25%' }}
            image={src}
            title="Image title" />
          <CardContent style={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">{Title}</Typography>
            <Typography>Year: {Year}</Typography>
            <Typography>Type: {Type}</Typography>
          </CardContent>
          <Divider/>
          <CardActions style={{display: "flex", justifyContent: "space-evenly"}}>
          {!this.state.likeBtn? null: 
          <IconButton aria-label="add to favorites" onClick={()=>{
            this.setState({likeBtn: false });
            favourites.forEach((movie: any) => {
              if (movie.imdbID === this.props.imdbID) {
                console.log("exsit");
              }
            });
            const { deleteFromFavourites } = this.props
            deleteFromFavourites(imdbID)
            
          }}>
          <FavoriteIcon color="error"/>
        </IconButton>
          }
        {this.state.likeBtn? null: 
        <IconButton aria-label="add to favorites" onClick={()=>{
          this.setState({likeBtn: true });
          favourites.forEach((movie: any) => {
            if (movie.imdbID === this.props.imdbID) {
              console.log("exsit");
            }
          });
          const { addToFavourites } = this.props
          addToFavourites(this.props)
        }}>
        <FavoriteBorderIcon color="inherit"/>
        
      </IconButton>
        }
        
            {/* <a href={`https://www.imdb.com/title/${imdbID}/`} target="_blanck">
              <Button size="small" color="primary">IMDB</Button>
            </a> */}
            <a href={`https://www.youtube.com/results?search_query=${Title}`} target="_blanck">
              <Button size="small" ><YouTubeIcon color="error"/></Button>
            </a>

            <Link to={`/movie-page/${imdbID}`}>
              <IconButton aria-label="settings">
           <InfoOutlinedIcon />
         </IconButton>
            </Link>
          </CardActions>
        </Card>
            </Fade >
      </Grid>
    )
  }
}


const mapStateToProps = (state: any) => {
  const { favourites } = state
  return {favourites};
}

const mapDispatchToProps = (dispatch: any) => {
  return {
      addToFavourites: (movie: any)=>{
        dispatch(addMovieToFavouritesAction(movie))
      },
      
        deleteFromFavourites: (movieID: any) => {
            dispatch(deleteMovieFromFavouritesAction(movieID))
    
      }
  } 
}




export default connect(mapStateToProps, mapDispatchToProps)(Movie) 