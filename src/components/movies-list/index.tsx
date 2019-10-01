import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Movie from '../movie'
import  React from 'react';



export default class MoviesList extends React.Component<any, any> {
    
    render() {
        const {movies} = this.props

        return (
          
        <Container style={{paddingTop: "16px", paddingBottom: "16px" }} maxWidth="md">
            <Grid container spacing={4}>
                {movies.map((movie:any)=>   <Movie  key={movie.imdbID}  {...movie}/> )} 

            </Grid>
        </Container>
        )
    }
}
