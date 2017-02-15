import { render } from 'react-dom'
import React from 'react'
import App from './components/app.js'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'

const store = createStore(reducer, {foo: [], bar: []})
render(<Provider store={store}><App/></Provider>, document.getElementById('app'))