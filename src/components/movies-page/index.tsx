import React from 'react'
import axios from 'axios'
import MovieSearch from '../search'


export default class MoviesPage extends React.Component<any, any> {
    constructor(props:any) {
        super(props)
    this.state = { 
        movies: [],
  
        
     }
     
    }

    componentDidMount: any = (searchValue: any) => {
        axios.get(`http://www.omdbapi.com/?apikey=8036fcb6&s=${searchValue}`).then((response: any)=>{
         console.log("from the aba>>>>", searchValue)   
         this.setState({movies: response.data.Search})
         console.log("movies=>", this.state.movies)
        })
    }


    render() {
    
        const {searchValue} = this.props
        return (
            <div>
            <MovieSearch componentDidMount={this.componentDidMount} searchValue={searchValue} />

            
            </div>
        )
    }

}

// this is working more specipic
// componentDidMount() {
//     axios.get("http://www.omdbapi.com/?t=terminator&apikey=8036fcb6").then((response: any)=>{
//      console.log(response)   
//     })
// }