import Actions from './actions.config'

const initialState = {
    comments: [null] 
}


export default function root(state = initialState, action: any) {
    switch (action.type) {
            case Actions.SAVE_COMMENT: {
                const {comment} = action.payload
                const {comments} = state
                console.log("action from redusers=>", action)
                return {
                    ...state, comments: [...comments, comment] 
                }
            }
            default: {
                return state;
            } 
        
    }
}