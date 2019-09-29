import  React from 'react';
import Movie from '../movie'


export default class MoviesList extends React.Component<any, any> {
    
    render() {
        const {movies} = this.props

        return (
            <div>
              {movies.map((movie:any)=> <Movie  key={movie.imdbID}  {...movie}/>)}  
            </div>
        )
    }

}
