import React from 'react';
import { saveCommentAction } from '../../redux/actions'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Loader from '../loader'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';



export class MoviePage extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      currentMovie: "",
      loading: false,
      comment: "",
    }

  }

  componentDidMount() {
    const { imdbID } = this.props.match.params;
    this.setState({ loading: true })
    axios.get(`http://www.omdbapi.com/?apikey=8036fcb6&i=${imdbID}`).then((res: any) => {
      this.setState({ currentMovie: res.data, loading: false })
    })
  }

  render() {
    const { onSaveComment, comments } = this.props
    if (this.state.loading) return <Loader />
    const { Year, Type, Title, Poster, Actors, Genre, Country, Language, Plot, Runtime, imdbVotes, imdbRating } = this.state.currentMovie
    const defaultPicture = "https://images.immediate.co.uk/production/volatile/sites/3/2017/11/imagenotavailable1-39de324.png?quality=90&resize=620,413"
    let src = null;
    if (Poster === "N/A") {
      src = defaultPicture
    } else {
      src = Poster
    }
    return (
      <div>

        <div style={{ flexGrow: 1 }}>
          <Paper style={{ padding: "4px", margin: "auto", maxWidth: 700, height: 350 }}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase style={{ width: 228, height: 328 }}>
                  <img style={{
                    margin: 'auto',
                    display: 'block',
                    maxWidth: '100%',
                    maxHeight: '100%',
                  }}
                    alt="complex" src={src} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography style={{textAlign:"left"}} gutterBottom variant="subtitle1">
                      {Title}
                    </Typography>
                    <Typography style={{textAlign:"left"}} variant="body2" gutterBottom>
                     Year: {Year}
                    </Typography>
                    <Typography style={{textAlign:"left"}} variant="body2" gutterBottom>
                     Actors: {Actors}
                    </Typography>
                    <Typography style={{textAlign:"left"}} variant="body2" gutterBottom>
                     Genre: {Genre}
                    </Typography>
                    <Typography style={{textAlign:"left"}} variant="body2" gutterBottom>
                     Language: {Language}
                    </Typography>
                    <Typography style={{textAlign:"left"}} variant="body2" gutterBottom>
                     Country: {Country}
                    </Typography>
                    <Typography style={{textAlign:"left"}} variant="body2" gutterBottom>
                     Runtime: {Runtime}
                    </Typography>
                    <Typography style={{textAlign:"left"}} variant="body2" gutterBottom>
                     imdbRating: {imdbRating}
                    </Typography>
                    <Typography style={{textAlign:"left"}} variant="body2" gutterBottom>
                     Plot: {Plot}
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary">
                        ID: 1030114
                    </Typography> */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>

        <div style={{ flexGrow: 1 }}>
          <Paper style={{ padding: "4px", textAlign: "center", maxWidth: 700, margin: "auto" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="standard-multiline-static"
                  label="Feedback"
                  placeholder="write a comment..."
                  multiline
                  rows="4"
                  style={{ marginLeft: "2px", marginRight: "2px", width: 200 }}
                  margin="normal"
                  onChange={(e) => {
                    this.setState({ comment: e.target.value })
                  }}
                  value={this.state.comment}
                />
                <Button style={{ margin: "35px" }} size="small" color="primary" onClick={() => {
                  onSaveComment(this.state.comment)
                }} >Add</Button>
              </Grid>
            </Grid>
          </Paper>
        </div>

      </div>
    )
  }
}


const mapStateToProps = (state: any) => {

  return {};
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSaveComment: (comment: any) => {
      dispatch(saveCommentAction(comment))
    }
  };
}


export default connect(null, mapDispatchToProps)(MoviePage) 