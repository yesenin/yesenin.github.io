import * as types from '../constants/ActionTypes'

export const addFolder = parent => ({
    type: types.ADD_FOLDER,
    name: "folder",
    parent: parent
})

export const selectItem = id => ({
    type: types.SELECT_ITEM,
    id: id
})

export const removeItem = (id, parentId) => ({
    type: types.REMOVE_ITEM,
    id: id,
    parentId: parentId
})

export const addNote = parent => ({
    type: types.ADD_NOTE,
    name: "note",
    parent: parent
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