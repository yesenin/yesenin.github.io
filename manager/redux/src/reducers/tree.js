import * as types from '../constants/ActionTypes'
import { v4 } from 'uuid'

const initialState = {
    //lastId: 0,
    selectedId: 0,
    folders: [
        {
            name: 'root',
            id: 0,
            children: [],
            parent: null
        }
    ],
    notes: [],
    selectedNote: null,
    editableId: null,
    editableNote: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_FOLDER:
            if (!action.id) {
                action.id = v4()
            }
            let parent = action.parent    
            if (state.folders.filter(i => i.id === action.parent).length === 0) {
                parent = 0
            }
            const newFolder = { name: action.name, id: action.id, parent: parent, children: []}
            return {
                selectedId: action.id,
                folders: [
                    ...state.folders.map(i => {
                        if (i.id !== parent) {
                            return i;
                        }
                        return {
                            id: i.id,
                            name: i.name,
                            parent: i.parent,
                            children: [
                                ...i.children,
                                newFolder
                            ]
                        }
                    }),
                    newFolder
                ],
                notes: state.notes,
                selectedNote: null,
                editableId: null,
                editableNote: null
            }
        case types.REMOVE_ITEM:
            if (action.id === 0) {
                return state;
            }
            if (state.selectedNote !== null) {
                return {
                    selectedId: state.selectedId,
                    folders: state.folders,
                    notes: [
                        ...state.notes.filter(i => i.id !== state.selectedNote)
                    ],
                    selectedNote: null,
                    editableId: state.editableId,
                    editableNote: state.editableNote
                }
            }
            return {
                selectedId: action.parentId,
                folders: [
                    ...state.folders.filter(i => i.id !== action.id)
                ],
                notes: [
                    ...state.notes.filter(i => i.id !== action.id)
                ],
                selectedNote: state.selectedNote,
                editableId: state.editableId,
                editableNote: state.editableNote
            }
        case types.ADD_NOTE:
            if (!action.id) {
                action.id = v4()
            }
            const newNote = state.folders.filter(i => i.id === action.parent).length
                        ? { name: action.name, id: action.id, parent: action.parent}
                        : { name: action.name, id: action.id, parent: 0}
            return {
                selectedId: state.selectedId,
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
                selectedId: action.id,
                folders: state.folders,
                notes: state.notes,
                selectedNote: null,
                editableId: null,
                editableNote: null
            }
        case types.SELECT_NOTE:
            return {
                selectedId: state.selectedId,
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
                    selectedId: state.selectedId,
                    folders: state.folders,
                    notes: state.notes,
                    selectedNote: state.selectedNote,
                    editableId: state.editableId,
                    editableNote: action.id
                }
            }
            return {
                selectedId: state.selectedId,
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
                selectedId: state.selectedId,
                folders: state.folders,
                notes: [
                    ...state.notes.map(i => {
                        if (i.id === action.id) {
                            return {
                                id: i.id,
                                name: action.name,
                                parent: i.parent
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