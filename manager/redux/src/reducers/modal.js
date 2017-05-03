import * as types from '../constants/ActionTypes'

const initialState = {
    isNew: null,
    isOpen: null,
    id: null,
    content: {
        name: null,
        body: null,
        tags: []
    }
}

const modal = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_NOTE:
            return {
                isNew: true,
                isOpen: false,
                id: action.id,
                content: {
                    name: null,
                    body: null,
                    tags: []
                }
            }  
        case types.SELECT_NOTE:
            return {
                isNew: false,
                isOpen: true,
                id: action.id,
                content: {
                    name: 'a name',
                    body: 'a body',
                    tags: ['tag 1', 'tag 2']
                }
            } 
        case 'GET_DIRECTORIES':
        case 'GET_NOTES':
        case 'UPDATE_NOTE':
        case 'CLOSE_MODAL':
            return {
                isNew: null,
                isOpen: false,
                id: null,
                content: {
                    name: null,
                    body: null,
                    tags: []
                }
            }
        case types.REMOVE_ITEM:
            return {
                isNew: null,
                isOpen: false,
                id: null,
                content: {
                    name: null,
                    body: null,
                    tags: []
                }
            }    
        default:
            return state    
    }
}

export default modal