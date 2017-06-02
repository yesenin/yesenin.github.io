import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveDirectory, selectDirectory, deleteDirectory } from '../actions/directoryActions'
import { saveNote } from '../actions/noteActions'
import Tree from '../components/TreeContainer'

import logo from '../assets/logo.svg'
import Radium from 'radium'
import styles from '../styles'

class App extends Component {
  render() {
    return (
        <div>
            <header style={[styles.header]}><img src={logo} role="presentation"/></header>  
            <main style={[styles.main]}>
                <aside>    
                    <a href="#" onClick={this.props.saveDirectory}>Add a folder</a>
                    <a href="#" onClick={this.props.saveNote}>Add a note</a>
                    <a href="#" onClick={() => this.props.deleteDirectory(this.props.directories.selectedId)}>Delete selected item</a>
                </aside>
                <article>    
                    <Tree
                    directories={this.props.directories}
                    selectDirectory={this.props.selectDirectory} />
                    <ul>
                        {this.props.notes.all.map((note, i) => <li key={i}>{note.name}</li>)}    
                    </ul>    
                </article>
            </main>
            <footer style={[styles.footer]}>
                2017, Anton Yesenin
            </footer>
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
export default connect(mapProps, mapActions)(Radium(App))