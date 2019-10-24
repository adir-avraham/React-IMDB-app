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

export const getSeriesesPendinngAction = () => {  
    return {
        type: Actions.GET_SERIESES_PENDING,
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
        try {
            const result = await service.getSerieses(searchValue);
            // if (!result.data.Search) {
                //     dispatch(getSeriesesFailureAction())       
                //     }         
                dispatch(getSeriesesSuccessAction(result.data.Search))
        }
        catch(err) {
            dispatch(getSeriesesFailureAction(err.message))
            //console.log('myError: ', err.message);   
        }
    }
}

export const getSeriesesFailureAction = (error: any) => {
    return {
        type: Actions.GET_SERIESES_FAILEURE,
        payload: { error }
    }
}


export const getGamesPendingAction = () => {
    return {
        type: Actions.GET_GAMES_PENDING,
    }
}

export const getGamesSuccessAction = (games: any) => {
    return {
        type: Actions.GET_GAMES_SUCCESS,
        payload: { games }
    }
}

export const getGamesFailureAction = (error: any) => {
    return {
        type: Actions.GET_GAMES_FAILEURE,
        payload: { error }
    }
}

export const getGamesAction = (searchValue: any) => {
    return async (dispatch: any) => {
        try {
            const result = await service.getGames(searchValue)
            dispatch(getGamesSuccessAction(result.data.Search))
        }
        catch(err) {
            dispatch(getGamesFailureAction(err.message))
        }
    }
}