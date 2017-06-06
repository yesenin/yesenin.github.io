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
        case types.SELECT_NOTE:
            return Object.assign({}, state, { selectedId: action.id })
        case types.SELECT_DIRECTORY:
            return Object.assign({}, state, { selectedId: null })
        default:
            return state
    }
}

export default noteReducer