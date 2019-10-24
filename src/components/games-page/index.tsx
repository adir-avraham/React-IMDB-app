import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import { getGamesAction , getGamesPendingAction, getGamesFailureAction } from '../../redux/actions'
import Grid from '@material-ui/core/Grid';
import Header from '../header'; 
import Movie from '../movie';
import React from 'react';
import Loader from '../loader';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export class GamesPage extends React.Component<any, any> {

    state = {
        searchValue: "",
    }

    render() {
        const { searchValue, getGames, games, loading, getGamesPending } = this.props

        if (loading) return <Loader />
        return (
            <div>
                <Header title={"VIDEO GAMES PAGE"}/>

                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Search games
                </Typography>

                <TextField value={searchValue} onChange={(e) => {
                    const searchValue = e.target.value
                    this.setState({ searchValue })
                }}
                    label="Game title"
                    style={{ marginLeft: "2px", marginRight: "2px", marginTop: "4px" }}
                    margin="dense"
                    variant="outlined" />
                <Button variant="contained" color="primary" style={{ margin: "5.5px" }} onClick={() => {
                    //this.setState({loading: true})
                    if (!this.state.searchValue) return;
                    getGamesPending()
                    getGames(this.state.searchValue)
                }}> <SearchIcon />
                    SEARCH </Button>
                <Container style={{ paddingTop: "16px", paddingBottom: "16px" }} maxWidth="md">
                    <Grid container spacing={4}>
                        {games.map((games: any, index: number) => <Movie key={`vg${index}`}  {...games} />)}
                    </Grid>
                </Container>

            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    let { games, loading } = state;
    if (!games) {
        games = [];
        return { loading, games }
    } else {
        return { games, loading }
    }   
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getGames: (searchValue: any) => {
            dispatch(getGamesAction(searchValue))
        },
        getGamesPending: () => {
            dispatch(getGamesPendingAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesPage)