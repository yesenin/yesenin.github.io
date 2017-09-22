import * as types from '../actions/actionTypes'
import initialState from './initialState'

const editorReducer = (state = initialState.editor, action) => {
    switch (action.type) {
        case types.PREPARE_NOTE:
        case types.SELECT_NOTE:    
            return Object.assign({}, state, { note: action.note, isOpen: true })    
        case types.CANCEL_EDITOR:
        case types.ADD_NOTE_SUCCESS:    
            return Object.assign({}, state, { isOpen: false, note: null })
        default:    
            return state
    }
}

export default editorReducer