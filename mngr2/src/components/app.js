import React from 'react'

import Menu from './menu.js'
import List from './list.js'

import { connect } from 'react-redux'

import * as actions from '../actions'
import { bindActionCreators } from 'redux'

const App = ({counters, actions}) => (
    <div>
        <Menu addCounter={actions.AddCounter}/>
        <List counters={counters}/>
    </div>
)
const mapStateToProps = state => ({
  counters: state
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
