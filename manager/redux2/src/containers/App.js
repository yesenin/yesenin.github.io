import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveDirectory, selectDirectory, deleteDirectory, editDirectory } from '../actions/directoryActions'
import { saveNote, selectNote, editNote } from '../actions/noteActions'

import Menu from '../components/Menu'
import Tree from '../components/TreeContainer'
import Notes from '../components/Notes'
import NoteEditor from '../components/NoteEditor'
import Spinner from '../components/Spinner'

class App extends Component {
    constructor(props) {
        super(props)
        this.resetEdit = this.resetEdit.bind(this)
    }

    resetEdit() {
        this.props.editDirectory(null)
        this.props.editNote(null)
    }
  render() {
    return (
        <div>
            <div onClick={this.resetEdit}>
                <main>
                    <aside>
                        <Menu
                            saveDirectory={() => { this.props.saveDirectory(this.props.directories.selectedId) } }
                            saveNote={() => { this.props.saveNote(this.props.directories.selectedId) }}
                            deleteDirectory={() => this.props.deleteDirectory(this.props.directories.selectedId)} />
                        <Tree    
                            items={this.props.directories.all}
                            parentId={null}
                            selectedId={this.props.directories.selectedId}
                            editingId={this.props.directories.editingId}
                            selectDirectory={this.props.selectDirectory}
                            editDirectory={this.props.editDirectory}/>
                    </aside>
                    <content>    
                        <Notes
                            notes={this.props.notes} select={this.props.selectNote} />
                            {
                                //this.props.notes.selected && <NoteEditor />
                            }
                    </content>
                </main>
        </div>
        <Spinner mode={this.props.isRequesting} />
      </div>
      )
  }
}

const mapProps = (state, ownProps) => {
    return {
        directories: state.directories,
        notes: {
            all: [...state.notes.all.filter(note => note.directoryId === state.directories.selectedId)],
            selected: state.notes.selected
        },
        isRequesting: state.api.isRequesting
    }
}

const mapActions = (dispatch) => {
    return {
        saveDirectory: (parentId) => dispatch(saveDirectory({name: 'New folder', parentId})),
        selectDirectory: (id) => dispatch(selectDirectory(id)),
        deleteDirectory: (id) => dispatch(deleteDirectory(id)),
        saveNote: (directoryId) => dispatch(saveNote({ title: 'New note', directoryId })),
        selectNote: (id) => dispatch(selectNote(id)),
        editDirectory: (id) => dispatch(editDirectory(id)),
        editNote: (id) => dispatch(editNote(id))
    }
}
export default connect(mapProps, mapActions)(App)