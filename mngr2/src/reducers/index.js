export default (state = {}, action) => {
    console.log("reducers state: " + JSON.stringify(state))
    console.log("reducers action: " + JSON.stringify(action))
    if (action.type === 'FOO') {
        return {
            bar: state.bar,
            foo: [...state.foo, action.name]
        }
    }
    if (action.type === 'BAR') {
        return {
            foo: state.foo,
            bar: [...state.bar, action.name]
        }
    }
    return state
}