import * as types from '../constants/ActionTypes'

export const selectFolder = id => ({
    type: types.SELECT_ITEM,
    id: id
})



export const selectNote = data => ({
    type: types.SELECT_NOTE,
    data: data
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


export const closeModal = () => ({
    type: 'CLOSE_MODAL'
})


export const request = () => ({
  type: 'API_REQUEST'
})

export const request1 = () => ({
  type: 'API_REQUEST1'
})

export const receive = (data, id) => ({
  type: 'GET_DIRECTORIES',
  data,
  id
})

const apiPost = (parentId, name) => dispatch => {
  dispatch(request())
  return fetch('http://localhost:3000/directories/', {
        method: 'POST',
        body: JSON.stringify({ parentId, name }),
        headers: new Headers({'Content-Type': 'application/json'})
    }).then(resp => resp.json())
}

const apiGet = (id) => dispatch => {
  dispatch(request())
  return fetch('http://localhost:3000/directories/')
    .then(response => response.json())
    .then(json => dispatch(receive(json, id)))
}


const apiDelete = (id) => dispatch => {
  dispatch(request())
  return fetch(`http://localhost:3000/directories/${id}`, {
        method: 'DELETE'
    })
}


export const apiAddDirectory = (parentId, name) => (dispatch, getState) => {
    const foo = getState()
    if (!foo.data) {
        dispatch(apiPost(parentId, name))
            .then((json) =>  dispatch(apiGet(json["id"])))
    }
}

export const apiGetDirectories = (id) => (dispatch, getState) => {
    const foo = getState()
    if (!foo.data) {
        return dispatch(apiGet(id))
    }
}

export const apiDeleteDirectory = (id, parentId) => (dispatch, getState) => {
    const foo = getState()
    if (!foo.data) {
        dispatch(apiDelete(id))
            .then(() =>  dispatch(apiGet(parentId)))
    }
}

export const receiveNotes = (data) => ({
  type: 'GET_NOTES',
  data
})


const apiNotesGet = () => dispatch => {
  dispatch(request())
  return fetch('http://localhost:3000/notices/')
    .then(response => response.json())
    .then(json => dispatch(receiveNotes(json)))
}

const apiNotesPost = (directoryId, title, description, tags) => dispatch => {
  dispatch(request())
  return fetch('http://localhost:3000/notices/', {
        method: 'POST',
        body: JSON.stringify({ directoryId: directoryId, title: title, description: description, tags: tags }),
        headers: new Headers({'Content-Type': 'application/json'})
    })
}

const apiNotesPut = (id, directoryId, title, description, tags, position) => dispatch => {
  dispatch(request())
  return fetch(`http://localhost:3000/notices/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ id: id, directoryId: directoryId, title: title, description: description, tags: tags, position: position }),
        headers: new Headers({'Content-Type': 'application/json'})
    })
}

const apiNotesDelete = (id) => dispatch => {
  dispatch(request())
  return fetch(`http://localhost:3000/notices/${id}`, {
        method: 'DELETE'
    })
}

export const getNotes = id => (dispatch, getState) => {
    const foo = getState()
    if (!foo.data) {
        dispatch(apiNotesGet())
    }
}

export const apiAddNote = id => (dispatch, getState) => {
    dispatch(request1())
}

export const apiAddNote1 = (directoryId, content) => (dispatch, getState) => {
    const foo = getState()
    if (!foo.data) {
        dispatch(apiNotesPost(directoryId, content.title, content.description, content.tags))
            .catch((error) => {
                console.log(error);
            })
            .then(() => dispatch(closeModal()))
            .then(() =>  dispatch(apiNotesGet()))
            
    }
}

export const apiUpdateNote = (id, directoryId, content) => (dispatch, getState) => {
    const foo = getState()
    if (!foo.data) {
        dispatch(apiNotesPut(id, directoryId, content.title, content.description, content.tags, content.position))
            .catch((error) => {
                console.log(error);
            })
            .then(() =>  dispatch(apiNotesGet()))   
    }
}

export const apiDeleteNote = (id) => (dispatch, getState) => {
    const foo = getState()
    if (!foo.data) {
        dispatch(apiNotesDelete(id))
            .then(() =>  dispatch(apiNotesGet()))
    }
}

const apiFolderPut = (id, parentId, name) => dispatch => {
  dispatch(request())
  return fetch(`http://localhost:3000/directories/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ id: id, parentId: parentId, name: name }),
        headers: new Headers({'Content-Type': 'application/json'})
    })
}

export const apiRenameFolder = (item, newName) => (dispatch, getState) => {
    const foo = getState()
    if (!foo.data) {
        dispatch(apiFolderPut(item.id, item.parentId, newName))
            .catch((error) => {
                console.log(error);
            })
            .then(() =>  dispatch(apiGet()))   
    }
}


export const apiRenameNote = (item, newName) => (dispatch, getState) => {
    const foo = getState()
    if (!foo.data) {
        dispatch(apiNotesPut(item.id, item.directoryId, newName, item.description, item.tags))
            .then(() =>  dispatch(apiNotesGet()))   
    }
}

export const search = (text) => ({
  type: 'SEARCH',
  text
})

export const changeSearch = (flag) => ({
  type: 'CHANGE_SEARCH',
  flag
})

export const swap = (a, b) => (dispatch, getState) => {
    const foo = getState()
    let noteA = foo.tree.notes.filter(i => i.id === a)[0]
    const posA = noteA.position
    let noteB = foo.tree.notes.filter(i => i.id === b)[0]
    const posB = noteB.position
    noteA.position = posB
    noteB.position = posA

    dispatch(apiNotesPut(noteA.id, noteA.directoryId, noteA.title, noteA.description, noteA.tags, noteA.position))
        .then(dispatch(apiNotesPut(noteB.id, noteB.directoryId, noteB.title, noteB.description, noteB.tags, noteB.position)))
        .then(() =>  dispatch(apiNotesGet()))

}