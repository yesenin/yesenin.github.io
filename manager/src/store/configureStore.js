import reducers from '../reducers/'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = (initialState) => {
    return createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    )
}