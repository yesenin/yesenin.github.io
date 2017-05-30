import * as types from './actionTypes'
import DirectoryApi from '../api/mockDirectoryApi'

export const loadDirectoriesSuccess = (directories) => {
    return {type: types.LOAD_DIRECTORIES_SUCCESS, directories}
}

export const addDirectorySuccess = (directory) => {
    return {type: types.ADD_DIRECTORY_SUCCESS, directory}
}

export const updateDirectorySuccess = (directory) => {
    return {type: types.UPDATE_DIRECTORY_SUCCESS, directory}
}

export const selectDirectory = (id) => {
    return {type: types.SELECT_DIRECTORY, id}
}

export const loadDirectories = () => {
    return (dispatch) => {
        return DirectoryApi.getAllDirectories()
        .then(directories => {
            dispatch(loadDirectoriesSuccess(directories))
        })
        .catch(error => {
            throw(error)
        })
    }
}

export const saveDirectory = (directory) => {
    return (dispatch) => {
        return DirectoryApi.addDirectory(directory)
        .then(directory => 
            dispatch(addDirectorySuccess(directory))
        )
        .catch(error => {
            throw(error)
        })
    }
}