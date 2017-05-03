const api = (state = {
    isFetching: false,
    data: {}
}, action) => {
    switch (action.type) {
        case 'REQUEST':
            return {
                ...state,
                isFetching: true
            }
        case 'RECEIVE':
            return {
                ...state,
                isFetching: false,
                data: action.data
            }
        case 'RECEIVE1':
            return {
                ...state,
                isFetching: false,
                data: action.data,
                id: action.id
            }
        default:
            return state
    }
}

export default api