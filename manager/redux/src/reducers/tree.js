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
    resultNotes: [],
    isAdvancedSearch: false,
    selectedNote: null,
    editableId: null,
    editableNote: null,
    searchText: null
}

const tree = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH':
            return {
                ...state,
                searchText: action.text === '' ? null : action.text
            }  
        case 'CHANGE_SEARCH':  
            return {
                ...state,
            isAdvancedSearch: action.flag    
        }       
        case 'GET_DIRECTORIES':
            return {
                ...state,
                folders: action.data,
                selectedFolder: action.id
            }
        case 'GET_NOTES':
            return {
                ...state,
                notes: action.data,
                resultNotes: action.data
            }
        case types.ADD_FOLDER:
            if (!action.id) {
                action.id = getId()
            }
            return {
                ...state,
                selectedFolder: action.id,
                folders: folders(state.folders, action)
            }
        case types.REMOVE_ITEM:
            if (action.id === 0) {
                return state;
            }
            if (action.parentId === null) {
                return {
                    ...state,
                    notes: state.notes.filter(i => i.id !== action.id),
                    selectedNote: null
                }
            }
            return {
                ...state,
                folders: state.folders.filter(i => i.id !== action.id),
                notes: state.notes.filter(i => i.parent !== action.id)
            }

        case types.SELECT_ITEM:
            return {
                ...state,
                selectedFolder: action.id
            }
        case types.SELECT_NOTE:
            return {
                ...state,
                selectedNote: action.id
            }
        case 'TOGGLE_EDIT_FOLDER':
            if (action.on) {
                return {
                    ...state,
                    editableId: action.id
                }
            }
            return {
                ...state,
                editableId: null
            }

        case 'TOGGLE_EDIT_NOTE':
            if (action.on) {
                return {
                    ...state,
                    editableNote: action.id
                }
            }
            return {
                ...state,
                editableNote: null
            }

        case 'RENAME_ITEM':
            return {
                ...state,
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
                ]
            }
        case 'RENAME_NOTE':
            return {
                ...state,
                notes: [
                    ...state.notes.map(i => {
                        if (i.id === action.id) {
                            return {
                                ...i,
                                title: action.title
                            }
                        } else {
                            return i
                        }
                    })
                ]
            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                selectedNote: null
            } 
        case 'UPDATE_NOTE':
           return {
                ...state,
                notes: [
                    ...state.notes.map(i => {
                        if (i.id === action.id) {
                            return {
                                ...i,
                                title: action.name,
                                description: action.body,
                                tags: [...i.tags, action.tags]
                            }
                        } else {
                            return i
                        }
                    })
                ]
            }
        default:
            return state;
    }  
}

export default tree