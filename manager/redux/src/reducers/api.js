const api = (state = {
    isFetching: false,
    data: {}
}, action) => {
    switch (action.type) {
        case 'API_REQUEST':
            return {
                ...state,
                isFetching: true
            }
        /*
        case 'GET_DIRECTORIES':
            return {
                ...state,
                isFetching: false,
                data: action.data
            }
        */
        case 'GET_DIRECTORIES':
            return {
                ...state,
                isFetching: false,
                data: action.data,
                id: action.id
            }
        case 'GET_NOTES':
            return {
                ...state,
                isFetching: false,
                data: action.data
            }
        default:
            return state
    }
}

export default api