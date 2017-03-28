import * as actions from '../actions'

const foo = (state = {}, action) => {
    console.log("action: " + JSON.stringify(action))
    console.log("state: " + JSON.stringify(state))
    if (action.type === actions.ADD_COUNTER) {
        var newCounters = [...state.counters, {id: Math.random(), value: 0}]
        state.counters = newCounters
        return state
    }
    if (action.type === actions.SELECT_COUNTER) {
        return state
    }
    if (action.type === actions.INC_COUNTER) {
        return state
    }
    return state
}

export default foo