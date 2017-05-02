import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Menu from '../components/Menu'
import FolderTree from '../components/FolderTree'
import NoteList from '../components/NoteList'

class TreeContainer extends Component {
    addFolder() {
        this.props.addFolder(this.props.selectedFolder)
    }
    addNote() {
        this.props.addNote(this.props.selectedFolder)
    }
    remove() {
        if (this.props.selectedNote !== null) {
            this.props.removeItem(this.props.selectedNote)
        } else {
            this.props.removeItem(this.props.selectedFolder)
        }
    }
    select(id) {
        this.props.selectedFolder(id)
    }
    render() {
        return (
            <div className='wrapper'>
                <Menu
                    addFolder={this.addFolder.bind(this)}
                    addNote={this.addNote.bind(this)}
                    remove={this.remove.bind(this)} />
                <FolderTree
                    folders={this.props.folders}
                    selectedFolder={this.props.selectedFolder}/>
                <NoteList 
                    items={this.props.notes} />
            </div>    
        )
    }
}

const mapStateToProps = (state) => (
    {
        folders: state.tree.folders,
        notes: state.tree.notes.filter(i => i.parent === state.tree.selectedId),
        selectedFolder: state.tree.selectedId,
        selectedNote: state.tree.selectedNote,
    }
)

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeContainer)