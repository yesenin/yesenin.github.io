import * as types from '../actions/actionTypes'
import initialState from './initialState'

const directoriesReducer = (state = initialState.directories, action) => {
    switch (action.type) {
        case types.LOAD_DIRECTORIES_SUCCESS:
            return Object.assign({}, state, {all: action.directories, selectedId: 1})
        case types.ADD_DIRECTORY_SUCCESS:
            return Object.assign({}, state, {all:
                [
                    ...state.all,
                    Object.assign({}, action.directory)
                ], selectedId: action.directory.id})
        case types.UPDATE_DIRECTORY_SUCCESS:
            return Object.assign({}, state, {all:
                [
                    ...state.all.map((item) => {
                        return item.id === action.directory.id ? action.directory : item
                    })
                ]
            })
        case types.DELETE_DIRECTORY_SUCCESS:
            return Object.assign({}, state, {all:
                [
                    ...state.all.filter(item => item.id !== action.id),
                ], selectedId: 1
            })
        case types.SELECT_DIRECTORY:
            return Object.assign({}, state, {selectedId: action.id})
        case types.EDIT_DIRECTORY:
            return Object.assign({}, state, {editingId: action.id})
        default:
            return state
    }
}

export default directoriesReducer