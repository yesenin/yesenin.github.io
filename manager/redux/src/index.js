import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { HashRouter as Router, Route } from 'react-router-dom'; 
import { createLogger } from 'redux-logger'

//import { dataService } from './reducers/tree'

import App from './containers/App'
import reducers from './reducers/'


const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path='/:dir?' component={App} />
    </Router>
  </Provider>
)

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}
const store = createStore(reducers, applyMiddleware(...middleware))

render(<Root store={store} />, document.getElementById('app'))

//store.dispatch({type: 'API_POST_DIRECTORIES', name: 'sdf', parentId: 1})
//store.dispatch({ type: 'API_GET_DIRECTORIES' })
//store.dispatch({type: 'API_GET_NOTICES'})

/*
<Router>
      <Route path="/:dir?/:note?" component={App}/>
    </Router>
    */