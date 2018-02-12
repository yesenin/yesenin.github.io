import * as types from '../actions/actionTypes'
import initialState from './initialState'

const apiReducer = (state = initialState.api, action) => {
    switch (action.type) {
        case types.API_REQUEST:
            return Object.assign({}, state, {isRequesting: true});
        case types.API_OK:
            return Object.assign({}, state, {isRequesting: false});
        default:
            return state;
    }
};

export default apiReducer