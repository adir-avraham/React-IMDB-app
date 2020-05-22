import axios from 'axios'
import Loader from '../loader'
import MoviesList from '../movies-list'
import MovieSearch from '../search'
import React from 'react'




export default class MoviesPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            movies: [],
            loading: false

        }
    }

    getMoviesByName: any = (searchValue: any) => {
        if (!searchValue) return;
        this.setState({ loading: true })
        axios.get(`https://www.omdbapi.com/?apikey=8036fcb6&s=${searchValue}&type=movie`).then((response: any) => {
            if (!response.data.Search) {
                this.setState({ movies: [], loading: false })
                return
            }
            this.setState({ movies: response.data.Search, loading: false })
        })
    }


    render() {

        if (this.state.loading) return <Loader />

        return (
            <div>
                <MovieSearch getMoviesByName={this.getMoviesByName} />
                <MoviesList movies={this.state.movies} />

            </div>
        )
    }

}

// This is more specipic api
// componentDidMount() {
//     axios.get("http://www.omdbapi.com/?t=terminator&apikey=8036fcb6").then((response: any)=>{
//      console.log(response)   
//     })
// }