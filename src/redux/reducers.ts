import Actions from './actions.config'

const initialState = {
    comments: [],
    favourites: []
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
        default: {
            return state;
        }

    }
}