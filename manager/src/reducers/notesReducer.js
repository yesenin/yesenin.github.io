import * as types from '../actions/actionTypes';
import initialState from './initialState';

const filterList = (list, parent, query, advanced) => {
    let newList = list.filter(x => (x.directoryId === parent) && (x.title.indexOf(query) >= 0))
    return newList.sort((a,b) => {
        if (a.position > b.position) return 1
        if (a.position < b.position) return -1
        return 0
    })
}

const notesReducer = (state = initialState.notes, action) => {
    let newList = []
    switch(action.type) {
        case types.ADD_NOTE:
            newList = [
                ...state.list, 
                Object.assign({}, action.note, { title: `${action.note.title} ${action.note.id}`})
            ]
            return Object.assign({}, state, {
                list: newList,
                current: filterList(newList, state.parent, state.query, state.isAdvanced),
                selectedId: action.note.id
            })
        case types.SELECT_NOTE:
            if (action.id !== state.selectedId) {
                return Object.assign({}, state, { selectedId: action.id })
            }
            return state
        case types.LOAD_NOTES:
            newList = action.data
            return Object.assign({}, state, { 
                list: newList,
                current: filterList(newList, state.parent, state.query, state.isAdvanced)
            })
        case types.SELECT_FOLDER:
            return Object.assign({}, state, { 
                current: filterList(state.list, action.id, state.query, state.isAdvanced),
                parent: action.id })
        case types.CHANGED_SEARCH_MODE:
            return Object.assign({}, state, { 
                isAdvanced: action.isAdvanced,
                current: filterList(state.list, state.parent, state.query, action.isAdvanced)
            })
        case types.CHANGED_SEARCH_QUERY:
            return Object.assign({}, state, {
                query: action.query,
                current: filterList(state.list, state.parent, action.query, state.isAdvanced)
            })
        case types.UPDATE_NOTE:
            newList = state.list.map(x => x.id === action.data.id ? action.data : x)
            return Object.assign({}, state, {
                list: newList,
                current: filterList(newList, state.parent, state.query, state.isAdvanced)
            })
        case types.DELETE_NOTE:
            newList = state.list.filter(x => x.id !== action.id)
            return Object.assign({}, state, {
                list: newList,
                current: filterList(newList, state.parent, state.query, state.isAdvanced)
            })
        case types.SWAP_NOTES:
            const note_a = state.list.find(x => x.id === action.a)
            const note_b = state.list.find(x => x.id === action.b)
            newList = state.list.map(x => x.id === action.a ? Object.assign({}, x, { position: note_b.position}) : x)
            newList = newList.map(x => x.id === action.b ? Object.assign({}, x, { position: note_a.position}): x)
            return Object.assign({}, state, {
                list: newList,
                current: filterList(newList, state.parent, state.query, state.isAdvanced)
            })
        default:
            return state
    }
}

export default notesReducer