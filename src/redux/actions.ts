import Actions from './actions.config'
//import movie from '../components/movie'ex

export const saveCommentAction = (comment: any) => {

    return {
        type: Actions.SAVE_COMMENT,
        payload: { comment }
    }

} 

export const addMovieToFavouritesAction = (movie: any) => {

    return {
        type: Actions.ADD_MOVIE_TO_FAVOURITES,
        payload: { movie }
    }

}

export const deleteMovieFromFavouritesAction = (movieID: any) => {

    return {
        type: Actions.DELETE_MOVIE_FROM_FAVOURITES,
        payload: { movieID }
    }

}

export const addNewArrivalAction = (arrival: any) => {

    return {
        type: Actions.ADD_NEW_ARRIVAL,
        payload: { arrival }
    }
    
}
