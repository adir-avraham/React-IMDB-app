import Button from '@material-ui/core/Button';
import Header from '../header'
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MovieIcon from '@material-ui/icons/Movie';

export default class MovieSearch extends React.Component<any, any> {

    state = {
        searchValue: ""
    }

    render() {
        const { searchValue, getMoviesByName } = this.props;

        return (
            <div>
                <Header title="MOVIES PAGE"/>
                <MovieIcon color="secondary" fontSize="large"/>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Search movies
            </Typography>

                <TextField value={searchValue} onChange={(e) => {
                    const searchValue = e.target.value
                    this.setState({ searchValue })
                }}
                    label="Movie title"
                    style={{ marginLeft: "2px", marginRight: "2px", marginTop: "4px" }}
                    margin="dense"
                    variant="outlined" />
                <Button variant="contained" color="primary" style={{ margin: "5.5px" }} onClick={() => {
                    getMoviesByName(this.state.searchValue)
                }}> <SearchIcon/>
                    SEARCH </Button>
            </div>
        )
    }
}







