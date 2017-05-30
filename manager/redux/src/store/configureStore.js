import reducers from '../reducers/'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

export const configureStore = (initialState) => {
    return createStore(
        reducers,
        initialState,
        applyMiddleware(thunk)
    )
}