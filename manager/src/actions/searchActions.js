import * as types from './actionTypes'

export const changeQuery = (query, isAdvanced) => {
    return {
        type: types.CHANGED_SEARCH_QUERY,
        query,
        isAdvanced
    }
}

export const changeState = (isOpen) => {
    return {
        type: types.CHANGED_SEARCH_STATE,
        isOpen
    }
}