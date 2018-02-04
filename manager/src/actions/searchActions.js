import * as types from './actionTypes'

export const changeMode = (isAdvanced) => {
    return {
        type: types.CHANGED_SEARCH_MODE,
        isAdvanced
    }
}

export const changeQuery = (query) => {
    return {
        type: types.CHANGED_SEARCH_QUERY,
        query
    }
}