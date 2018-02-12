import * as types from '../actions/actionTypes'
import initialState from './initialState'

const searchReducer = (state = initialState.search, action) => {
    switch (action.type) {
        case types.CHANGED_SEARCH_QUERY:
            return Object.assign({}, state, {
                query: action.query,
                isAdvanced: action.isAdvanced
            })
        case types.CHANGED_SEARCH_STATE:
            return Object.assign({}, state, { isOpen: action.isOpen })
        default:
            return state;
    }
};

export default searchReducer