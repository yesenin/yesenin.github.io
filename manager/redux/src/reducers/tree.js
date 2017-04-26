import * as types from '../constants/ActionTypes'
import { v4 } from 'uuid'

const initialState = {
    //lastId: 0,
    selectedId: 0,
    folders: [
        {
            name: 'root',
            id: 0,
            children: []
        }
    ],
    notes: []
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
                selectedId: state.selectedId,
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
                notes: state.notes
            }
        case types.REMOVE_ITEM:
            return {
                selectedId: action.parentId,
                folders: [
                    ...state.folders.filter(i => i.id !== action.id)
                ],
                notes: [
                    ...state.notes.filter(i => i.id !== action.id)
                ]
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
                ]
            }
        case types.SELECT_ITEM:   
            return {
                selectedId: action.id,
                folders: state.folders,
                notes: state.notes
            }
        case 'UPDATE_NOTE':
            return state;
        case 'RENAME_ITEM':
            return state;
        default:
            return state;
    }
}