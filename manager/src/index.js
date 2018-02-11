import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { configureStore } from './store/configureStore'
import App from './components/App'
import './styles/index.css'

const store = configureStore()

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/search' component={App}/>
        <Route exact path='/advanced_search' component={App}/>
        <Route exact path='/error' component={App}/>
        <Route exact path='/:directory?/:note?' component={App}/>
        
        <Route render={() => <div>404</div>}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app')
)