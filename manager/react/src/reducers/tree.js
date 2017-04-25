const initialState = {
    lastId: 0,
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
        case 'ADD_FOLDER':
            return {
                lastId: state.lastId + 1,
                folders: [
                    ...state.folders,
                    state.folders.filter(i => i.id === action.parent).length
                        ? { name: action.name, id: state.lastId + 1, parent: action.parent}
                        : { name: action.name, id: state.lastId + 1, parent: 0}
                ],
                notes: state.notes
            }
            break
        case 'REMOVE_ITEM':
            return {
                lastId: state.lastId,
                folders: [
                    ...state.folders.filter(i => i.id !== action.id)
                ],
                notes: [
                    ...state.notes.filter(i => i.id !== action.id)
                ]
            }
        case 'ADD_NOTE':
            return {
                lastId: state.lastId + 1,
                folders: state.folders,
                notes: [
                    ...state.notes,
                    state.folders.filter(i => i.id === action.parent).length
                        ? { name: action.name, id: state.lastId + 1, parent: action.parent}
                        : { name: action.name, id: state.lastId + 1, parent: 0}
                ]
            }
        case 'UPDATE_NOTE':
            return state;
        case 'RENAME_ITEM':
            return state;
        default:
            return state;
    }
}