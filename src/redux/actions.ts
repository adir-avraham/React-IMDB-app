import Actions from './actions.config'

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