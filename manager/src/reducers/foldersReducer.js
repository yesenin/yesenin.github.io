import * as types from '../actions/actionTypes';
import initialState from './initialState';

const foldersReducer = (state = initialState.folders, action) => {
    switch (action.type) {
        case types.ADD_FOLDER:
            return Object.assign({}, state, {
                list: [...state.list, action.folder], 
                selectedId: action.folder.id
            })
        case types.DELETE_FOLDER:
            return Object.assign({}, state, {
                list: state.list.filter(x => x.id !== action.id), 
                selectedId: 1
            })
        case types.SELECT_FOLDER:
            if (action.id !== state.selectedId) {
                return Object.assign({}, state, { selectedId: action.id })
            }
            return state
        case types.LOAD_FOLDERS:
            return Object.assign({}, state, { list: action.data })
        case types.UPDATE_FOLDER:
            return Object.assign({}, state, { list: state.list.map(x => x.id === action.data.id ? action.data : x)})
        default:
            return state
    }
}

export default foldersReducer