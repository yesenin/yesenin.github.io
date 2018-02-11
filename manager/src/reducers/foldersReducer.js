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
            if (state.list.length > 0) {
                const folderCandidate = state.list.find(x => x.id === action.id)
                if (!state.selected) {
                    return Object.assign({}, state, { selected: folderCandidate, selectedId: action.id})
                }
                if (action.id !== state.selected.id && folderCandidate) {
                    return Object.assign({}, state, { selected: folderCandidate, selectedId: action.id })
                }
            }
            return state
        case types.LOAD_FOLDERS:
            return Object.assign({}, state, {
                list: action.data, 
                selected: state.list.find(x => x.id === state.selectedId)
            })
        case types.UPDATE_FOLDER:
            return Object.assign({}, state, { list: state.list.map(x => x.id === action.data.id ? action.data : x)})
        default:
            return state
    }
}

export default foldersReducer