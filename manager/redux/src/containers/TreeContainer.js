import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Menu from '../components/Menu'
import FolderTree from '../components/FolderTree'
import NoteList from '../components/NoteList'

class TreeContainer extends Component {
    componentDidMount() {
        this.props.fetchIfNeeded1()
    }
    addFolder() {
        //this.props.addFolder(this.props.folders.selected)
        this.props.fetchIfNeeded(this.props.folders.selected)
    }
    addNote() {
        this.props.addNote(this.props.folders.selected)
    }
    remove() {
        if (this.props.notes.selected !== null) {
            this.props.removeItem(this.props.notes.selected)
        } else {
            //this.props.removeItem(this.props.folders.selected, this.props.folders.all.filter((i) => i.id === this.props.folders.selected)[0].parent)
            this.props.fetchIfNeeded2(this.props.folders.selected, this.props.folders.all.filter((i) => i.id === this.props.folders.selected)[0].parentId)
        }
    }
    select(id) {
        this.props.selectFolder(id)
    }
    selectNote(id) {
        this.props.selectNote(id)
    }
    editNoteOn(id, e) {
        e.target.focus()
        this.props.toggleEditNote(true, id)
    }
    editNoteOff(id, event) {
        if (event.keyCode === 13) {
            if (event.target.value !== '') {
                this.props.renameNote(id, event.target.value)
            }    
            this.props.toggleEditNote(false, id)
        } else if (event.keyCode === 27) {
            this.props.toggleEditNote(false, id)
        }
    }

    api() {
        this.props.fetchIfNeeded()
    }   
    
    render() {
        return (
            <div className='wrapper'>
                <Menu
                    addFolder={this.addFolder.bind(this)}
                    addNote={this.addNote.bind(this)}
                    remove={this.remove.bind(this)} />
                <FolderTree
                    items={this.props.folders}
                    isFetching={this.props.isFetching}
                    folderClickHandler={this.select.bind(this)}/>
                <NoteList 
                    items={this.props.notes}
                    selectNoteHandler={this.selectNote.bind(this)}
                    editNoteOnHandler={this.editNoteOn.bind(this)}
                    editNoteOffHandler={this.editNoteOff.bind(this)}/>
            </div>    
        )
    }
}

const mapStateToProps = (state) => (
    {
        folders: {
            all: state.tree.folders,
            selected: state.tree.selectedFolder
        },
        notes: {
            all: state.tree.notes.filter(i => i.directoryId === state.tree.selectedFolder),
            selected: state.tree.selectedNote,
            editedNote: state.tree.editableNote
        }
    }
)

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeContainer)