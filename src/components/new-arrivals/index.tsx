import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from '../header';
import Movie from '../movie';
import React from 'react';



export class NewArrivals extends React.Component<any, any> {

    render() {
    const { newArrivals } = this.props
    
        return (
            <div>
            <Header title="NEW ARRIVALS" style={{ margin: "50px" }} />
            <Container style={{ paddingTop: "16px", paddingBottom: "16px" }} maxWidth="md">
            <Grid container spacing={4}>
            {newArrivals.map((arrival: any, index: number) => <Movie key={`new${index}`}  {...arrival} />)}
            </Grid>
            </Container>
            </div>
        )
    }
}


const mapStateToProps = (state: any) => {
    const { newArrivals } = state
    return { 
        newArrivals
    }
}

const mapDispatchToProps = (dispatch: any) => {

    return;
}

export default connect(mapStateToProps, null)(NewArrivals)