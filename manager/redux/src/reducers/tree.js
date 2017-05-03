import * as types from '../constants/ActionTypes'

let idGenerator = 1

const getId = () => {
    idGenerator++
    return idGenerator
}

const folders = (state, action) => {
    switch (action.type) {
        case types.ADD_FOLDER:
            const newFolder = {
                id: action.id,
                name: action.name,
                parent: action.parent,
                children: []
            }
            return [
                ...state,
                newFolder
            ];
        default:
            return state;
    }
}    

const initialState = {
    isFetching: false,
    selectedFolder: 1,
    folders: [],
    notes: [],
    selectedNote: null,
    editableId: null,
    editableNote: null
}

export const dataService = store => next => action => {
    next(action)
    
    switch (action.type) {
        
        case 'API_GET_DIRECTORIES':
            fetch('http://localhost:3000/directories')
                .then(resp => resp.json())
                .then(json => 
                    next({
                        type: 'RECEIVE_POSTS',
                        foo: json
                    })
                )
            break
        case 'API_GET_NOTICES':
            fetch('http://localhost:3000/notices')
                .then((resp) => {
                    resp.json().then((foo) => {
                        next({
                            type: 'GET_NOTICES_RECEIVED',
                            foo
                        })
                    })
                })
            break
        case 'API_POST_DIRECTORIES':
            fetch('http://localhost:3000/directories', {
                method: 'POST',
                body: JSON.stringify({ parentId: action.parentId, name: action.name }),
                headers: new Headers({ 'Content-Type': 'application/json' })
            })
                .then(fetch('http://localhost:3000/directories')
                .then((resp) => {
                    resp.json()
                    .then((foo) => {
                        next({
                            type: 'GET_DIRECTORIES_RECEIVED',
                            foo
                        })
                    })
                }))
                
            break
        case 'API_POST_NOTICES':
            fetch('http://localhost:3000/notices', {
                method: 'POST',
                body: JSON.stringify({ directoryId: action.parentId, title: action.name, description: 'desc', tags:[] }),
                headers: new Headers({ 'Content-Type': 'application/json' })
            })
                .then(fetch('http://localhost:3000/notices')
                    .then((resp) => {
                        resp.json().then((foo) => {
                            next({
                                type: 'GET_NOTICES_RECEIVED',
                                foo
                            })
                        })
                    }))
            break
        default:
            break    
    }
}

const tree = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_POSTS':
            return {
                isFetching: true,
                selectedFolder: state.selectedFolder,
                folders: state.folders,
                notes: state.notes,
                selectedNote: state.selectedNote,
                editableId: state.editableId,
                editableNote: state.editableNote
            }
        case 'RECEIVE_POSTS':
            return {
                isFetching: false,
                selectedFolder: state.selectedFolder,
                folders: action.foo,
                notes: state.notes,
                selectedNote: state.selectedNote,
                editableId: state.editableId,
                editableNote: state.editableNote
            }
        case 'GET_DIRECTORIES_RECEIVED':
            return {
                selectedFolder: action.foo[0].id,
                folders: action.foo,
                notes: state.notes,
                selectedNote: null,
                editableId: null,
                editableNote: null
            }    
        case 'GET_NOTICES_RECEIVED':
            return {
                selectedFolder: state.selectedFolder,
                folders: state.folders,
                notes: action.foo,
                selectedNote: null,
                editableId: null,
                editableNote: null
            }   
        //case types.ADD_FOLDER:
                
        /*    
            if (!action.id) {
                action.id = getId()
            }
            return {
                selectedFolder: action.id,
                folders: folders(state.folders, action),
                notes: state.notes,
                selectedNote: null,
                editableId: null,
                editableNote: null
            }
        */
        case types.REMOVE_ITEM:
            if (action.id === 0) {
                return state;
            }
            if (action.parentId === null) {
                return {
                    selectedFolder: state.selectedFolder,
                    folders: state.folders,
                    notes: state.notes.filter(i => i.id !== action.id),
                    selectedNote: null,
                    editableId: state.editableId,
                    editableNote: state.editableNote
                }
            }
            return {
                selectedFolder: action.parentId,
                folders: state.folders.filter(i => i.id !== action.id),
                notes: state.notes.filter(i => i.parent !== action.id),
                selectedNote: state.selectedNote,
                editableId: state.editableId,
                editableNote: state.editableNote
            }
        case types.ADD_NOTE:
            if (!action.id) {
                action.id = getId()
            }
            const newNote = state.folders.filter(i => i.id === action.parent).length
                ? { name: action.name, id: action.id, parent: action.parent, body: 'body', tags: ['tag 1', 'tag 2']}
                : { name: action.name, id: action.id, parent: 0, body: 'body', tags: ['tag 1', 'tag 2'] }
            return {
                selectedFolder: state.selectedFolder,
                folders: state.folders,
                notes: [
                    ...state.notes,
                    newNote
                ],
                selectedNote: state.selectedNote,
                editableId: state.editableId,
                editableNote: state.editableNote
            }
        case types.SELECT_ITEM:
            return {
                selectedFolder: action.id,
                folders: state.folders,
                notes: state.notes,
                selectedNote: null,
                editableId: null,
                editableNote: null
            }
        case types.SELECT_NOTE:
            return {
                selectedFolder: state.selectedFolder,
                folders: state.folders,
                notes: state.notes,
                selectedNote: action.id,
                editableId: state.editableId,
                editableNote: state.editableNote
            }
        case 'TOGGLE_EDIT_FOLDER':
            if (action.on) {
                return {
                    selectedId: state.selectedId,
                    folders: state.folders,
                    notes: state.notes,
                    selectedNote: state.selectedNote,
                    editableId: action.id,
                    editableNote: state.editableNote
                }
            }
            return {
                selectedId: state.selectedId,
                folders: state.folders,
                notes: state.notes,
                selectedNote: state.selectedNote,
                editableId: null,
                editableNote: state.editableNote
            }

        case 'TOGGLE_EDIT_NOTE':
            if (action.on) {
                return {
                    selectedFolder: state.selectedFolder,
                    folders: state.folders,
                    notes: state.notes,
                    selectedNote: state.selectedNote,
                    editableId: state.editableId,
                    editableNote: action.id
                }
            }
            return {
                selectedFolder: state.selectedFolder,
                folders: state.folders,
                notes: state.notes,
                selectedNote: state.selectedNote,
                editableId: state.editableId,
                editableNote: null
            }

        case 'RENAME_ITEM':
            return {
                selectedId: state.selectedId,
                folders: [
                    ...state.folders.map(i => {
                        if (i.id === action.id) {
                            return {
                                id: i.id,
                                name: action.name,
                                children: i.children,
                                parent: i.parent
                            }
                        } else {
                            return i
                        }
                    })
                ],
                notes: state.notes,
                selectedNote: state.selectedNote,
                editableId: state.editableId,
                editableNote: state.editableNote
            }
        case 'RENAME_NOTE':
            return {
                selectedFolder: state.selectedFolder,
                folders: state.folders,
                notes: [
                    ...state.notes.map(i => {
                        if (i.id === action.id) {
                            return {
                                id: i.id,
                                name: action.name,
                                parent: i.parent,
                                body: i.body,
                                tags: i.tags
                            }
                        } else {
                            return i
                        }
                    })
                ],
                selectedNote: state.selectedNote,
                editableId: state.editableId,
                editableNote: state.editableNote
            }
        case 'CLOSE_MODAL':
            return {
                selectedFolder: state.selectedFolder,
                folders: state.folders,
                notes: state.notes,
                selectedNote: null,
                editableId: state.editableId,
                editableNote: state.editableNote
            } 
        case 'UPDATE_NOTE':
           return {
                selectedFolder: state.selectedFolder,
                folders: state.folders,
                notes: [
                    ...state.notes.map(i => {
                        if (i.id === action.id) {
                            return {
                                id: i.id,
                                name: action.name,
                                parent: i.parent,
                                body: action.body,
                                tags: [...i.tags, action.tags]
                            }
                        } else {
                            return i
                        }
                    })
                ],
                selectedNote: state.selectedNote,
                editableId: state.editableId,
                editableNote: state.editableNote
            }
        default:
            return state;
    }  
}

export default tree