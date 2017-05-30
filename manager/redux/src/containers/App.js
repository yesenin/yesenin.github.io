import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveDirectory, selectDirectory } from '../actions/directoryActions'
import Tree from '../components/TreeContainer'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <a href="#" className="menu underline" onClick={this.props.saveDirectory}>Add a folder</a>
          <a href="#" className="menu underline">Add a note</a>
          <a href="#" className="menu underline">Delete selected item</a>
        </div>
        <Tree
          directories={this.props.directories}
          saveDirectory={this.props.saveDirectory} />
      </div>
      )
  }
}

const mapProps = (state, ownProps) => {
    return {
        directories: state.directories
    }
}

const mapActions = (dispatch) => {
    return {
        saveDirectory: () => dispatch(saveDirectory({name: 'New folder'})),
        selectDirectory: (id) => dispatch(selectDirectory(id))
    }
}

export default connect(mapProps, mapActions)(App)