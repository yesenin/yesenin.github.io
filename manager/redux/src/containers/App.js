import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveDirectory, selectDirectory, deleteDirectory } from '../actions/directoryActions'
import { saveNote } from '../actions/noteActions'

import Menu from '../components/Menu'
import Tree from '../components/TreeContainer'
import Notes from '../components/Notes'

import logo from '../assets/logo.svg'
import Radium from 'radium'
import styles from '../styles/app'

class App extends Component {
  render() {
    return (
        <div style={[styles.wrapper]}>
            <header style={[styles.header]}><img src={logo} role="presentation"/></header>  
            <main style={[styles.main]}>
                <Menu
                    saveDirectory={() => { this.props.saveDirectory(this.props.directories.selectedId) } }
                    saveNote={this.props.saveNote}
                    deleteDirectory={() => this.props.deleteDirectory(this.props.directories.selectedId)}/>
                <content style={[styles.content]}>    
                    <Tree    
                        items={this.props.directories.all}
                        parentId={null}
                        selectedId={this.props.directories.selectedId}
                        selectDirectory={this.props.selectDirectory} />
                    <Notes
                        items={this.props.notes.all}/>    
                </content>
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
        saveDirectory: (parentId) => dispatch(saveDirectory({name: 'New folder', parentId: parentId})),
        selectDirectory: (id) => dispatch(selectDirectory(id)),
        deleteDirectory: (id) => dispatch(deleteDirectory(id)),
        saveNote: () => dispatch(saveNote({name: 'New note'}))
    }
}
export default connect(mapProps, mapActions)(Radium(App))