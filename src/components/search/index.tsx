import React from 'react';



export default class MovieSearch extends React.Component<any, any> {
        
    state = {
            searchValue: ""
        }
    
    render() {
        
        const {searchValue, getMoviesByName} = this.props;

        return (
            <div>
            
            Search movie: 
            <br/>
            
            <input value={searchValue} onChange={(e)=>{
            const searchValue = e.target.value
            this.setState({searchValue})
            }}/>
            
            <button onClick={()=>{
            getMoviesByName(this.state.searchValue)
              
            }}>SEARCH</button>
            
            </div>
        )
    }
}