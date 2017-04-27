import * as types from '../constants/ActionTypes'

const initialState = {
    content: 'And now something completely different'
}

const modal = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_FOLDER:
            return {
                content: action.parent
            }    
        default:
            return state    
    }
}

export default modal