import Button from '@material-ui/core/Button';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


export default class MovieSearch extends React.Component<any, any> {
        
    state = {
            searchValue: ""
        }
    
    render() {
    
        const {searchValue, getMoviesByName} = this.props;

        return (
            <div>           
            <Typography variant="h5" align="center" color="inherit" paragraph>
            SEARCH MOVIE
            </Typography>

            <TextField value={searchValue} onChange={(e)=>{
            const searchValue = e.target.value
            this.setState({searchValue})
            }}
            label="Movie title"
            style={{marginLeft: "2px", marginRight: "2px", marginTop: "4px"}}
            margin="dense"
            variant="outlined"/>

            <Button variant="contained" color="primary" style={{ margin:"5.5px"}} onClick={()=>{
            getMoviesByName(this.state.searchValue)}}>
            SEARCH </Button>          
            </div>
        )
    }
}







