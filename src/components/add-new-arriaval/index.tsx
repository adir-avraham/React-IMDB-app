import AddCircleIcon from '@material-ui/icons/AddCircle';
import { addNewArrivalAction } from '../../redux/actions'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Header from '../header'
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


export class AddNewArrivals extends React.Component<any, any> {

  state = { Title: "", Year: "", Type: "", Poster: "" }

  render() {

    return (

      <div>
        <Header title="ADD NEW ARRIVALS" style={{ margin: "50px" }} />

        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div style={{
            marginTop: "16px",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Avatar style={{
              margin: "2px",
              backgroundColor: "#f50057"
            }}>
              <AddCircleIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add a new arrival
                </Typography>
            <form style={{
              width: '100%',
              marginTop: "14px",
            }} noValidate>
              <Grid container spacing={2}>
                <Grid style={{ marginBottom: "8px" }} item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="title"
                    label="Title"
                    name="Title"
                    autoComplete="Title"
                    onChange={(e)=>{
                    this.setState({Title: e.target.value})
                    }}
                  />
                </Grid>
                
                <Grid style={{ marginBottom: "8px" }} item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Image url"
                    label="Image url"
                    name="Image url"
                    autoComplete="Image url"
                    onChange={(e)=>{
                    this.setState({Poster: e.target.value})
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="Year"
                    name="Year"
                    variant="outlined"
                    required
                    fullWidth
                    id="Year"
                    label="Year"
                    autoFocus
                    onChange={(e)=>{
                    this.setState({Year: e.target.value})
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Type"
                    label="Type"
                    name="Type"
                    autoComplete="Type"
                    onChange={(e)=>{
                    this.setState({Type: e.target.value})
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                style={{ margin: "18px 0px 4px" }}
                onClick={()=>{
                  const { addNewArrival } = this.props
                  addNewArrival(this.state)
                }}
              >
                Add a new arrival
          </Button>
            </form>
          </div>
        </Container>
      </div>
    )
  }
} 


const mapStateToProps = (state: any) => {
  return state;
}

const mapDispatchToProps = (dispatch: any) => {

  return {
    addNewArrival: (arrival: any) => {
      dispatch(addNewArrivalAction(arrival))
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewArrivals)