import * as types from './actionTypes'
import DirectoryApi from '../api/mockDirectoryApi'

const directoryRequest = () => {
    return {type: types.DIRECTORY_REQUEST}
}

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

export const editDirectory = (id) => {
    return {type: types.EDIT_DIRECTORY, id}
}

export const deleteDirectorySuccess = (id) => {
    return {type: types.DELETE_DIRECTORY_SUCCESS, id}
}

export const loadDirectories = () => {
    return (dispatch) => {
        dispatch(directoryRequest())
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
        dispatch(directoryRequest())
        if (directory.id) {
            return DirectoryApi.updateDirectory(directory)
                .then(directory => 
                    dispatch(updateDirectorySuccess(directory))
                )
                .catch(error => {
                    throw(error)
                })
        } else {
            return DirectoryApi.addDirectory(directory)
                .then(directory => 
                    dispatch(addDirectorySuccess(directory))
                )
                .catch(error => {
                    throw(error)
                })
        }
    }
}

export const deleteDirectory = (id) => {
    return (dispatch) => {
        if (id > 1) {
            dispatch(directoryRequest())
            return DirectoryApi.deleteDirectory(id)
                .then(id =>
                    dispatch(deleteDirectorySuccess(id))
                )
                .catch(error => {
                    throw (error)
                })
        }
    }    
}