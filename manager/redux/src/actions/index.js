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