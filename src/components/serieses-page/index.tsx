import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import { getSeriesesAction, getSeriesesPendinngAction } from '../../redux/actions'
import Grid from '@material-ui/core/Grid';
import Header from '../header';
import Movie from '../movie';
import React from 'react';
import Loader from '../loader'
import Button from '@material-ui/core/Button';

import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export class SeriesesPage extends React.Component<any, any> {

    state = {
        searchValue: "",
    }



    render() {
        const { searchValue, getSerieses, serieses, loading, getSeriesesPendinng } = this.props
        
        if (loading) return <Loader />
        return (

            <div>
                <Header title="SERIESES PAGE" style={{ margin: "50px" }} />

                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Search series
                </Typography>

                <TextField value={searchValue} onChange={(e) => {
                    const searchValue = e.target.value
                    this.setState({ searchValue })
                }}
                    label="Series title"
                    style={{ marginLeft: "2px", marginRight: "2px", marginTop: "4px" }}
                    margin="dense"
                    variant="outlined" />
                <Button variant="contained" color="primary" style={{ margin: "5.5px" }} onClick={() => {
                    //this.setState({loading: true})
                    if (!this.state.searchValue) return;
                    getSeriesesPendinng()
                    getSerieses(this.state.searchValue)
                }}> <SearchIcon />
                    SEARCH </Button>
                <Container style={{ paddingTop: "16px", paddingBottom: "16px" }} maxWidth="md">
                    <Grid container spacing={4}>
                        {serieses.map((series: any, index: number) => <Movie key={`new${index}`}  {...series} />)}
                    </Grid>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    const { serieses, loading } = state
    
    return { serieses, loading }
}

const mapDispatchToProps = (dispatch: any) => {

    return {
        getSerieses: (searchValue: any) => {
            dispatch(getSeriesesAction(searchValue))
        },
        getSeriesesPendinng: () => {
            dispatch(getSeriesesPendinngAction())

        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeriesesPage)