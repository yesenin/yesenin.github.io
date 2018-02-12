import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

import reducers from '../reducers/'

let middleware;
if (process.env.NODE_ENV !== 'production') {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    middleware =composeEnhancers(applyMiddleware(thunk))
} else {
    middleware = applyMiddleware(thunk)
}

export const configureStore = (initialState) => {
    return createStore(
        reducers,
        initialState,
        middleware
    )
}




