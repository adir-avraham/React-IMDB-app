import Actions from './actions.config'
import service from './service'

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

export const getSeriesesSuccessAction = (serieses: any) => {

    return {
        type: Actions.GET_SERIESES_SUCCESS,
        payload: { serieses }
    }
}

export const getSeriesesAction = (searchValue: any) => {
 
    return async (dispatch: any) => {
        const result = await service.getSerieses(searchValue);
    
            if (!result.data.Search) {

                return alert("no results")
            }         
            
        dispatch(getSeriesesSuccessAction(result.data.Search))

        
    }
}