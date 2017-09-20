import * as types from '../actions/actionTypes'
import initialState from './initialState'

const notesReducer = (state = initialState.notes, action) => {
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
        case types.UPDATE_NOTE_SUCCESS:
            return Object.assign({}, state, {all: 
                [
                    ...state.all.map((item) => {
                        return item.id === action.note.id ? action.note : item
                    })
                ]
            })
        case types.SELECT_NOTE:
            return Object.assign({}, state, { selected: state.all.filter(item => {return item.id === action.id})[0] })
        case types.SELECT_DIRECTORY:
            return Object.assign({}, state, { selected: null })
        case types.EDIT_NOTE:
            return Object.assign({}, state, { editingId: action.id })
        case types.ADD_DIRECTORY_SUCCESS:
            return Object.assign({}, state, { selected: null }) 
        default:
            return state
    }
}

export default notesReducer