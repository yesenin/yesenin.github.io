import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/App'
import tree_reducer from './reducers/tree'

const store = createStore(tree_reducer)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)