import Actions from './actions.config'

const initialState = {
    comment: null 
}


export default function root(state = initialState, action: any) {
    switch (action.type) {
            case Actions.SAVE_COMMENT: {
                const comment = action.payload.comment
                return {
                    ...state, 
                    comment 
                }
            }
            default: {
                return state;
            } 
        
    }
}