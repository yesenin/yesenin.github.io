import * as types from './actionTypes'

import DirectoriesApi from '../api/directoriesApi'

import { apiRequest, apiOk } from './apiActions'

export const selectFolder = (id) => {
    return {
        type: types.SELECT_FOLDER,
        id
    }
}

const loadFoldersOk = (data) => {
    return {
        type: types.LOAD_FOLDERS,
        data
    }
}

const updateFolderOk = (data) => {
    return {
        type: types.UPDATE_FOLDER,
        data
    }
}

export const updateFolder = (id, name, parentId) => {
    return (dispatch) => {
        dispatch(apiRequest());
        return DirectoriesApi.update({id, name, parentId})
            .then(data => {
                dispatch(apiOk())
                dispatch(updateFolderOk(data))
            })
            .catch(error => {
                throw(error)
            })
    }
}

export const loadFolders = () => {
    return (dispatch) => {
        dispatch(apiRequest());
        return DirectoriesApi.getAll()
            .then(data => {
                dispatch(apiOk())
                dispatch(loadFoldersOk(data))
                dispatch(selectFolder(1))
            })
            .catch(error => {
                throw(error)
            })
    }
}