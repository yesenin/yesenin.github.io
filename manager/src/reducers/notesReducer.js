import * as types from '../actions/actionTypes';
import initialState from './initialState';
import _ from 'lodash'

const notesReducer = (state = initialState.notes, action) => {
    switch(action.type) {
        case types.ADD_NOTE:
            return Object.assign({}, state, {
                list: _.orderBy(
                    [
                        ...state.list, 
                        Object.assign({}, action.note, { title: `${action.note.title} ${action.note.id}`})
                    ], x => x.position),
                selectedId: action.note.id
            })
        case types.SELECT_NOTE:
            if (action.id !== state.selectedId) {
                return Object.assign({}, state, { selectedId: action.id })
            }
            return state
        case types.LOAD_NOTES:
            return Object.assign({}, state, { 
                list: _.orderBy(action.data, x => x.action)
            })
        case types.SELECT_FOLDER:
            return Object.assign({}, state, { 
                parent: action.id })
        case types.CHANGED_SEARCH_QUERY:
            return Object.assign({}, state, {
                results: state.list
            })
        case types.UPDATE_NOTE:
            return Object.assign({}, state, {
                list: _.orderBy(state.list.map(x => x.id === action.data.id ? action.data : x), x => x.position)
            })
        case types.DELETE_NOTE:
            return Object.assign({}, state, {
                list: _.orderBy(state.list.filter(x => x.id !== action.id), x => x.position)
            })
        case types.SWAP_NOTES:
            const note_a = state.list.find(x => x.id === action.a)
            const note_b = state.list.find(x => x.id === action.b)
            let newList = state.list.map(x => x.id === action.a ? Object.assign({}, x, { position: note_b.position}) : x)
            newList = newList.map(x => x.id === action.b ? Object.assign({}, x, { position: note_a.position}): x)
            return Object.assign({}, state, {
                list: _.orderBy(newList, x => x.position)
            })
        default:
            return state
    }
}

export default notesReducer