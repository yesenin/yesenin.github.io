import * as types from '../actions/actionTypes'
import initialState from './initialState'

const noteReducer = (state = initialState.notes, action) => {
    switch (action.type) {
        case types.LOAD_NOTES_SUCCESS:
            return Object.assign({}, state, {all: action.notes})
        case types.ADD_NOTE_SUCCESS:
            return Object.assign({}, state, {all: 
                [
                    ...state.all,
                    Object.assign({}, action.note)
                ]
            })
        default:
            return state
    }
}

export default noteReducer