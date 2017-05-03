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
                parentId: action.parentId,
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
    selectedFolder: 1,
    folders: [
        {
            id: 1,
            name: "root",
            parentId: null
        }
    ],
    notes: [],
    selectedNote: null,
    editableId: null,
    editableNote: null
}

const tree = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DIRECTORIES':
            return {
                ...state,
                folders: action.data,
                selectedFolder: action.id
            }
        case 'GET_NOTES':
            return {
                ...state,
                notes: action.data
            }
        case types.ADD_FOLDER:
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
            const newNote = state.folders.filter(i => i.id === action.directoryId).length
                ? { title: action.title, id: action.id, directoryId: action.directoryId, description: 'body', tags: ['tag 1', 'tag 2'], position: 0}
                : { title: action.title, id: action.id, directoryId: 1, description: 'body', tags: ['tag 1', 'tag 2'], position: 0 }
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
                                parentId: i.parentId
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
                                title: action.title,
                                directoryId: i.directoryId,
                                description: i.description,
                                tags: i.tags,
                                position: i.position
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
                                title: action.name,
                                directoryId: i.directoryId,
                                description: action.body,
                                tags: [...i.tags, action.tags],
                                position: i.position
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