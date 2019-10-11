import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { deleteMovieFromFavouritesAction } from '../../redux/actions'
import Divider from '@material-ui/core/Divider';
import Header from '../header';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import React from 'react';
import Typography from '@material-ui/core/Typography';


export class Favourites extends React.Component<any, any> {

    render() {
        const { favourites } = this.props;
    
        return (
            <div>
                <Header title="FAVOURITES PAGE" style={{ margin: "50px" }} />
                <List style={{ width: "100%", maxWidth: 360 }}>
                    {favourites.map((movie: any) => { 
                        const { Title, Poster, Year, imdbID } = movie
                        return (
                        <ListItem key={imdbID} alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={Poster} />
                        </ListItemAvatar>
                        <ListItemText
                        primary={Title}
                        secondary={
                            <React.Fragment>
                            <Typography
                            component="span"
                            variant="body2"
                            style={{ display: "inline" }}
                            color="textPrimary"
                            >
                            {Year}
                            </Typography>
                            </React.Fragment>
                        }
                        />
                        <Button onClick={()=>{
                        
                            const { deleteFromFavourites } = this.props
                            deleteFromFavourites(imdbID)
                        }} ><DeleteForeverIcon color="error"/></Button>
                        </ListItem>
                    //<Divider variant="inset" component="li" />
                    )  
                }) }
                    </List>
            </div>
        )
    }
}


const mapStateToProps = (state: any) => {
    const { favourites } = state
    return { favourites };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        deleteFromFavourites: (movieID: any) => {
            dispatch(deleteMovieFromFavouritesAction(movieID))
    }
}
}


export default connect(mapStateToProps, mapDispatchToProps)(Favourites) 