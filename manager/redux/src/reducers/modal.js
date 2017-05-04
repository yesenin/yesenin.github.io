import * as types from '../constants/ActionTypes'

const initialState = {
    isNew: null,
    isOpen: null,
    mode: null,
    id: null,
    content: {
        tags:[]
    }
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
                content: {
                    tags:[]
                }
            }  
        case types.SELECT_NOTE:
            return {
                isNew: false,
                isOpen: true,
                id: action.data.id,
                mode: 'EDIT',
                content: action.data
            } 
        case 'GET_NOTES':
        case 'CLOSE_MODAL': {
            return {
                ...state,
                isOpen: false
            }
        }
        case 'GET_DIRECTORIES':
        case 'UPDATE_NOTE':
        
            return {
                isNew: null,
                isOpen: false,
                mode: null,
                id: null,
                content: {
                    tags:[]
                }
            }
        case types.REMOVE_ITEM:
            return {
                isNew: null,
                isOpen: false,
                mode: null,
                id: null,
                content: {
                    tags:[]
                }
            }    
        default:
            return state    
    }
}

export default modal