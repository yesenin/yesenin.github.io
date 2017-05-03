import * as types from '../constants/ActionTypes'

export const addFolder = parent => ({
    type: types.ADD_FOLDER,
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
    type: types.ADD_NOTE,
    title: "note",
    directoryId: parent
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

export const request = () => ({
  type: 'REQUEST'
})

export const receive = (data) => ({
  type: 'RECEIVE',
  data
})

export const receive1 = (data, id) => ({
    type: 'RECEIVE1',
    data,  
    id
})

const apiPost = id => dispatch => {
  dispatch(request())
  return fetch('http://localhost:3000/directories/', {
        method: 'POST',
        body: JSON.stringify({ parentId: id, name: "foo2" }),
        headers: new Headers({'Content-Type': 'application/json'})
    })
    .then(r => {
        fetch('http://localhost:3000/directories/')
            .then(response => response.json())
            .then(json => dispatch(receive(json)))
    })
}

const apiGet = () => dispatch => {
  dispatch(request())
  return fetch('http://localhost:3000/directories/')
    .then(response => response.json())
    .then(json => dispatch(receive(json)))
}


const apiDelete = (id, parentId) => dispatch => {
  dispatch(request())
  return fetch(`http://localhost:3000/directories/${id}`, {
        method: 'DELETE'
    })
    .then(r => {
        fetch('http://localhost:3000/directories/')
            .then(response => response.json())
            .then(json => dispatch(receive1(json, parentId)))
    })
}


export const fetchIfNeeded = id => (dispatch, getState) => {
    const foo = getState()
    if (!foo.data) {
        return dispatch(apiPost(id))
    }
}

export const fetchIfNeeded1 = () => (dispatch, getState) => {
    const foo = getState()
    if (!foo.data) {
        return dispatch(apiGet())
    }
}

export const fetchIfNeeded2 = (id, parentId) => (dispatch, getState) => {
    const foo = getState()
    if (!foo.data) {
        return dispatch(apiDelete(id, parentId))
    }
}