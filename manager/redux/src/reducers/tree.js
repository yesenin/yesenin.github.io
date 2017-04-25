import * as types from '../constants/ActionTypes'

const initialState = {
    lastId: 0,
    selectedId: 0,
    folders: [
        {
            name: 'root',
            id: 0
        }
    ],
    notes: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_FOLDER:
            let parent = action.parent    
            if (state.folders.filter(i => i.id === action.parent).length === 0) {
                parent = 0
            }
            return {
                lastId: state.lastId + 1,
                selectedId: state.selectedId,
                folders: [
                    ...state.folders,
                    { name: action.name, id: state.lastId + 1, parent: parent}
                ],
                notes: state.notes
            }
        case types.REMOVE_ITEM:
            return {
                lastId: state.lastId,
                selectedId: action.parentId,
                folders: [
                    ...state.folders.filter(i => i.id !== action.id)
                ],
                notes: [
                    ...state.notes.filter(i => i.id !== action.id)
                ]
            }
        case types.ADD_NOTE:
            const newNote = state.folders.filter(i => i.id === action.parent).length
                        ? { name: action.name, id: state.lastId + 1, parent: action.parent}
                        : { name: action.name, id: state.lastId + 1, parent: 0}
            return {
                lastId: state.lastId + 1,
                selectedId: state.selectedId,
                folders: state.folders,
                notes: [
                    ...state.notes,
                    newNote
                ]
            }
        case types.SELECT_ITEM:   
            return {
                lastId: state.lastId,
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