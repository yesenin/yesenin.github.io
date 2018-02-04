import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { configureStore } from './store/configureStore'
import App from './components/App'
import './styles/index.css'

import { loadFolders, selectFolder } from './actions/folderActions'
import { loadNotes } from './actions/noteAction'

const store = configureStore()
store.dispatch(loadFolders())
  .then(() => store.dispatch(loadNotes()))
  .then(() => store.dispatch(selectFolder(1)))


render(
  <Provider store={store}>
    <Router>
      <Route exact path='/:directory?/:note?' component={App} />
    </Router>
  </Provider>,
  document.getElementById('app')
)