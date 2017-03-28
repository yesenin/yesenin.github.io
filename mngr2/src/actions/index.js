export const ADD_COUNTER = 'ADD_COUNTER'
export const SELECT_COUNTER = 'SELECT_COUNTER'
export const INC_COUNTER = 'INC_COUNTER'

export const AddCounter = () => ({
    type: ADD_COUNTER
})

export const SelectCounter = id => ({
    type: SELECT_COUNTER,
    id
})

export const IncrementCounter = id => ({
    type: INC_COUNTER,
    id
})