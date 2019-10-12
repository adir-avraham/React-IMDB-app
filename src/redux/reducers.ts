import Actions from './actions.config'

const initialState = {
    comments: [],
    favourites: [],
    newArrivals: [],
    serieses: []
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
        case Actions.GET_SERIESES_SUCCESS: {
            const { serieses } = action.payload
            console.log("cons recucer" ,state)
            return {
                ...state, serieses
            }
        }
        default: {
            return state;
        }

    }
}