import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'
import { configureStore } from './store/configureStore'
import App from './containers/App'
import { loadDirectories } from './actions/directoryActions'

import './styles/index.css'

const store = configureStore()
store.dispatch(loadDirectories())

render(
  <Provider store={store}>
    <Router>
      <Route path='/:dir?' component={App} />
    </Router>
  </Provider>,
  document.getElementById('app')
)