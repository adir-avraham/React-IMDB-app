import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'; 
import Typography from '@material-ui/core/Typography';
import React from 'react';




export default class Movie extends React.Component<any, any> {


  render() {
    const { Title, Year, imdbID, Type, Poster } = this.props
    const defaultPicture = "https://images.immediate.co.uk/production/volatile/sites/3/2017/11/imagenotavailable1-39de324.png?quality=90&resize=620,413"
    let src = null;
    if (Poster === "N/A") {
      src = defaultPicture
    } else {
      src = Poster
    }

    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardMedia
            style={{ paddingTop: '56.25%' }}
            image={src}
            title="Image title" />
          <CardContent style={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">{Title}</Typography>
            <Typography>Year: {Year}</Typography>
            <Typography>Type: {Type}</Typography>
            <Typography><Link to={`/movie-page/${imdbID}`}><Button size="small" color="primary">Go to movie page</Button></Link> </Typography>
          </CardContent>
          <CardActions>
            <a href={`https://www.imdb.com/title/${imdbID}/`} target="_blanck">
              <Button size="small" color="primary">IMDB</Button>
            </a>
            <a href={`https://www.youtube.com/results?search_query=${Title}`} target="_blanck">
              <Button size="small" color="primary">YouTube</Button>
            </a>
          </CardActions>
        </Card>
      </Grid>
    )
  }
}
