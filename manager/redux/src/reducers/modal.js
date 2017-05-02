import * as types from '../constants/ActionTypes'

const initialState = {
    content: 'And now something completely different'
}

const modal = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_NOTE:
            return {
                content: action.id
            }    
        default:
            return state    
    }
}

export default modal