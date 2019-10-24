import Actions from './actions.config'

const initialState = {
    comments: [],
    favourites: [],
    newArrivals: [],
    serieses: [],
    games: [],
    loading: false,
    error: null,    
}


export default function root(state = initialState, action: any) {
    switch (action.type) {
        case Actions.SAVE_COMMENT: {
            const { comment } = action.payload
            const { comments } = state
            return {
                ...state, comments: [...comments, comment]
            }
        }
        case Actions.ADD_MOVIE_TO_FAVOURITES: {
            const { movie } = action.payload
            const { favourites } = state;
            return { ...state, favourites: [...favourites, movie] }
        }
        case Actions.DELETE_MOVIE_FROM_FAVOURITES: {
            const {favourites} = state;
            const { movieID } = action.payload
            const newFavourites = favourites.filter((movie: any) =>{
                return movie.imdbID !== movieID
            })
            return {...state, favourites: newFavourites}
        }
        case Actions.ADD_NEW_ARRIVAL: {
            const { newArrivals } = state;
            const { arrival } = action.payload
            return {
                ...state, newArrivals: [...newArrivals, arrival]
            }
        }
        case Actions.GET_SERIESES_PENDING: {
            return {
                ...state,
                loading: true
            }
        }
        case Actions.GET_SERIESES_SUCCESS: {
            const { serieses } = action.payload
            return {
                ...state,
                loading: false,
                error: null,
                serieses
            }
        }
        case Actions.GET_SERIESES_FAILEURE: {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        }
        case Actions.GET_GAMES_PENDING: {
            return {
                ...state,
                loading: true
            }
        }
        case Actions.GET_GAMES_SUCCESS: {
            const { games } = action.payload
            return {
                ...state,
                loading: false,
                error: null,
                games
            }
        }
        case Actions.GET_GAMES_FAILEURE: {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        }
        default: {
            return state;
        }

    }
}