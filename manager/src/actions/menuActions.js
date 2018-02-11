import * as types from './actionTypes'
// import FoldersApi from '../api/mockFoldersApi'
// import NotesApi from '../api/mockNoteApi'

import DirectoriesApi from '../api/directoriesApi'
import NoticesApi from '../api/noticesApi'

import { loadNotes, selectNote } from './noteActions'

import { apiRequest, apiOk } from './apiActions'

const addFolderOk = (folder) => {
    return {
        type: types.ADD_FOLDER,
        folder
    }
}

export const addFolder = (name, parentId) => {
    return (dispatch) => {
        dispatch(apiRequest());
        return DirectoriesApi.add({name, parentId})
            .then(data => {
                dispatch(apiOk())
                dispatch(addFolderOk(data))
            })
            .catch(error => {
                throw(error)
            })
    }
}

export const addNote = (title, directoryId) => {
    return (dispatch) => {
        dispatch(apiRequest())
        let description = ""
        let tags = []
        return NoticesApi.add({title, description, tags, directoryId})
            .then(data => {
                dispatch(apiOk())
                dispatch(loadNotes()).then(() => dispatch(selectNote(data.id)))
            })
            .catch(error => {
                throw(error)
            })
    }
}

const deleteFolderOk = (id) => {
    return {
        type: types.DELETE_FOLDER,
        id
    }
}

export const deleteFolder = (id) => {
    return (dispatch) => {
        dispatch(apiRequest());
        return DirectoriesApi.delete(id)
            .then(data => {
                dispatch(apiOk())
                dispatch(deleteFolderOk(data.id))
            })
            .catch(error => {
                throw(error)
            })
    }
}

const deleteNoteOk = (id) => {
    return {
        type: types.DELETE_NOTE,
        id
    }
}

export const deleteNote = (id) => {
    return (dispatch) => {
        dispatch(apiRequest());
        return NoticesApi.delete(id)
            .then(data => {
                dispatch(apiOk())
                dispatch(deleteNoteOk(data.id))
            })
            .catch(error => {
                throw(error)
            })
    }
}