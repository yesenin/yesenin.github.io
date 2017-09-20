import * as types from '../actions/actionTypes'
import initialState from './initialState'

const apiReducer = (state = initialState.api, action) => {
    switch (action.type) {
        case types.DIRECTORY_REQUEST:
        case types.NOTE_REQUEST:
            return Object.assign({}, state, {isRequesting: true})
        case types.ADD_DIRECTORY_SUCCESS:
        case types.ADD_NOTE_SUCCESS:
        case types.DELETE_DIRECTORY_SUCCESS:
        case types.LOAD_DIRECTORIES_SUCCESS:
        case types.LOAD_NOTES_SUCCESS:
        case types.UPDATE_DIRECTORY_SUCCESS:
        case types.UPDATE_NOTE_SUCCESS:
            return Object.assign({}, state, {isRequesting: false})
        default:
            return state
    }
}

export default apiReducer