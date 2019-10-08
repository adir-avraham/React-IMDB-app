import Actions from './actions.config'

export const saveCommentAction = (comment: any) => {

    return {
        type: Actions.SAVE_COMMENT,
        payload: { comment }
    }

} 