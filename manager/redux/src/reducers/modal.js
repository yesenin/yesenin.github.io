import * as types from '../constants/ActionTypes'

const initialState = {
    isNew: null,
    isOpen: null,
    mode: null,
    id: null,
    content: {}
}

const modal = (state = initialState, action) => {
    switch (action.type) {
        case 'API_REQUEST1':
        case types.ADD_NOTE:
            return {
                isNew: true,
                isOpen: true,
                mode: 'NEW',
                id: action.id,
                content: {}
            }  
        case types.SELECT_NOTE:
            return {
                isNew: false,
                isOpen: true,
                id: action.data.id,
                mode: 'EDIT',
                content: action.data
            } 
        case 'GET_DIRECTORIES':
        case 'GET_NOTES':
        case 'UPDATE_NOTE':
        case 'CLOSE_MODAL':
            return {
                isNew: null,
                isOpen: false,
                mode: null,
                id: null,
                content: {}
            }
        case types.REMOVE_ITEM:
            return {
                isNew: null,
                isOpen: false,
                mode: null,
                id: null,
                content: {}
            }    
        default:
            return state    
    }
}

export default modal