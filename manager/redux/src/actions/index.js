import * as types from '../constants/ActionTypes'

export const addFolder = parent => ({
    type: 'API_POST_DIRECTORIES',
    name: "folder",
    parentId: parent
})

export const selectFolder = id => ({
    type: types.SELECT_ITEM,
    id: id
})

export const removeItem = (id, parentId) => ({
    type: types.REMOVE_ITEM,
    id: id,
    parentId: parentId
})

export const addNote = parent => ({
    type: 'API_POST_NOTICES',
    name: "note",
    parentId: parent
})

export const selectNote = id => ({
    type: types.SELECT_NOTE,
    id: id
})

export const toggleEdit = (on, id) => ({
    type: types.TOGGLE_EDIT_FOLDER,
    on: on,
    id: id
})

export const toggleEditNote = (on, id) => ({
    type: 'TOGGLE_EDIT_NOTE',
    on: on,
    id: id
})

export const rename = (id, name) => ({
    type: types.RENAME_ITEM,
    id: id,
    name: name
})

export const renameNote = (id, name) => ({
    type: 'RENAME_NOTE',
    id: id,
    name: name
})

export const closeModal = () => ({
    type: 'CLOSE_MODAL'
})

export const updateNote = (id, name, body, tags) => ({
    type: 'UPDATE_NOTE',
    id: id,
    name: name,
    body: body,
    tags: tags
})

export const api_get_dirs = () => ({
        type: 'API_GET_DIRECTORIES'
    }
)