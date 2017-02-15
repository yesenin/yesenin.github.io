import React from 'react'

import Menu from './menu.js'
import Tree from './tree.js'
import List from './list.js'

import { connect } from 'react-redux'

import * as actions from '../actions'
import { bindActionCreators } from 'redux'

export class App extends React.Component {
    render() {
        return (<div>
                <Menu addFolder={this.props.actions.Foo} addItem={this.props.actions.Bar}/>
                <Tree folderCount={this.props.folderCount}/>
                <List itemCount={this.props.itemCount}/>
            </div>)
    }
}

const mapStateToProps = state => ({
  folderCount: state.foo.length,
  itemCount: state.bar.length
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

