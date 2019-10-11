import AddCircleIcon from '@material-ui/icons/AddCircle';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Header from '../header'
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


export default class AddNewArrivals extends React.Component<any, any> {

    render() {

        return (

            <div>
                <Header title="ADD NEW ARRIVALS" style={{ margin: "50px" }} />

                <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={{ marginTop: "16px",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',}}>
        <Avatar style={{
               margin: "2px",
               backgroundColor: "#f50057",
               
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
          <Grid style={{marginBottom: "8px"}} item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                name="Title"
                autoComplete="Title"
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
              />
            </Grid>
            
           
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{  margin: "18px 0px 4px"}}
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