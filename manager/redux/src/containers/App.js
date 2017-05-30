import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveDirectory, selectDirectory, deleteDirectory } from '../actions/directoryActions'
import { saveNote } from '../actions/noteActions'
import Tree from '../components/TreeContainer'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <a href="#" className="menu underline" onClick={this.props.saveDirectory}>Add a folder</a>
          <a href="#" className="menu underline" onClick={this.props.saveNote}>Add a note</a>
          <a href="#" className="menu underline" onClick={() => this.props.deleteDirectory(this.props.directories.selectedId)}>Delete selected item</a>
        </div>
        <Tree
          directories={this.props.directories}
          selectDirectory={this.props.selectDirectory} />
        <ul>
            {this.props.notes.all.map((note, i) => <li key={i}>{note.name}</li>)}    
        </ul>    
      </div>
      )
  }
}

const mapProps = (state, ownProps) => {
    return {
        directories: state.directories,
        notes: state.notes
    }
}

const mapActions = (dispatch) => {
    return {
        saveDirectory: () => dispatch(saveDirectory({name: 'New folder'})),
        selectDirectory: (id) => dispatch(selectDirectory(id)),
        deleteDirectory: (id) => dispatch(deleteDirectory(id)),
        saveNote: () => dispatch(saveNote({name: 'New note'}))
    }
}

export default connect(mapProps, mapActions)(App)