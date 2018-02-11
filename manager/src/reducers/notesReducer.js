import * as types from '../actions/actionTypes';
import initialState from './initialState';
import _ from 'lodash'

const changeState = (orig, changes) => {
    return Object.assign({}, orig, changes)
}

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
            if (state.list.length > 0) {
                const noteCandidate = state.list.find(x => x.id === action.id)
                if (!state.selected) {
                    return Object.assign({}, state, { selected: noteCandidate, selectedId: action.id })
                }
                if (action.id !== state.selected.id && noteCandidate) {
                    return Object.assign({}, state, { selected: noteCandidate, selectedId: action.id })
                }
            }
            return state
        case types.LOAD_NOTES:
            return changeState(state, {
                list: _.orderBy(action.data, x => x.position),
                selected: state.list.find(x => x.id === state.selectedId)
            })
        case types.UPDATE_NOTE:
            return Object.assign({}, state, {
                list: _.orderBy(state.list.map(x => x.id === action.data.id ? action.data : x), x => x.position)
            })
        case types.DELETE_NOTE:
            return Object.assign({}, state, {
                list: _.orderBy(state.list.filter(x => x.id !== action.id), x => x.position)
            })
        case types.CHANGED_SEARCH_QUERY:
            if (action.query) {
                if (action.isAdvanced) {
                    return Object.assign({}, state, {
                        searchResult: state.list.filter(x => {
                            return x.description.toLowerCase().indexOf(action.query.toLowerCase()) >= 0 ||
                                x.tags.filter(t => t.indexOf(action.query) >= 0).length > 0
                        })
                    })
                } else {
                    return Object.assign({}, state, {
                        searchResult: state.list.filter(x => x.title.toLowerCase().indexOf(action.query.toLowerCase()) >= 0)
                    })
                }
            } else {return Object.assign({}, state, {
                    searchResult: []
                })
            }
        default:
            return state
    }
}

export default notesReducer