import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import { getSeriesesAction } from '../../redux/actions'
import Grid from '@material-ui/core/Grid';
import Header from '../header';
import Movie from '../movie';
import React from 'react';

export class SeriesesPage extends React.Component<any, any> {

  

    componentDidMount() {
        
            this.props.getSerieses()
        }
        render() {
        const {serieses} = this.props

        return (

            <div>
                <Header title="SERIESES PAGE" style={{ margin: "50px" }} />

                <Container style={{ paddingTop: "16px", paddingBottom: "16px" }} maxWidth="md">
            <Grid container spacing={4}>
            {serieses.map((arrival: any, index: number) => <Movie key={`new${index}`}  {...arrival} />)}
            </Grid>
            </Container>
                
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    const {serieses} = state
    console.log("im hehre=>", serieses)
    return  {serieses}
        
    
}

const mapDispatchToProps = (dispatch: any) => {

    return {
        getSerieses: () => {
            dispatch(getSeriesesAction())
                
            }
    } 
}

export default connect(mapStateToProps, mapDispatchToProps) (SeriesesPage)