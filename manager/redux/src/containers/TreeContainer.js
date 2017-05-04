import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Menu from '../components/Menu'
import FolderTree from '../components/FolderTree'
import NoteList from '../components/NoteList'

class TreeContainer extends Component {
    componentDidMount() {
        this.props.apiGetDirectories(1)
        this.props.getNotes()
    }
    addFolder() {
        this.props.apiAddDirectory(this.props.folders.selected, "New Directory")
    }
    addNote() {
        this.props.apiAddNote(this.props.folders.selected)
    }
    remove() {
        if (this.props.notes.selected) {
            this.props.apiDeleteNote(this.props.notes.selected)
        } else if (this.props.folders.selected !== 1
            && this.props.folders.all.filter(i => i.parentId === this.props.folders.selected).length === 0
            && this.props.notes.all.filter(i => i.directoryId === this.props.folders.selected).length === 0) {
            this.props.apiDeleteDirectory(this.props.folders.selected, this.props.folders.all.filter((i) => i.id === this.props.folders.selected)[0].parentId)
        }
    }
    select(id) {
        this.props.selectFolder(id)
    }
    selectNote(id) {
        this.props.selectNote(this.props.notes.all.filter(i => i.id === id)[0])
    }
    editNoteOn(id, e) {
        this.props.toggleEditNote(true, id)
    }

    editFolderOn(id, e) {
        this.props.toggleEdit(true, id)
    }

    editFolderOff(item, event) {
        if (event.keyCode === 13) {
            if (event.target.value !== '') {
                this.props.apiRenameFolder(item, event.target.value)
            } 
            this.props.toggleEdit(false, item.id)
        } else if (event.keyCode === 27) {
            this.props.toggleEdit(false, item.id)
        }
    }

    editNoteOff(item, event) {
        if (event.keyCode === 13) {
            if (event.target.value !== '') {
                this.props.apiRenameNote(item, event.target.value)
            }    
            this.props.toggleEditNote(false, item.id)
        } else if (event.keyCode === 27) {
            this.props.toggleEditNote(false, item.id)
        }
    }

    search(e) {
        this.props.search(e.target.value)
    }
    
    changeSearch(e) {
        this.props.changeSearch(e.target.checked)
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
                    folderClickHandler={this.select.bind(this)}
                    doubleClickHandler1={this.editFolderOn.bind(this)}
                    keyHandler={this.editFolderOff.bind(this)}/>
                <div>
                    <div>
                        <input type='text' defaultValue='' placeholder='Search' onKeyUp={this.search.bind(this)} />
                        <label>
                            <input type='checkbox' onChange={this.changeSearch.bind(this)}/>
                            Advanced
                        </label>
                    </div>
                    <NoteList 
                    items={this.props.notes}
                    selectNoteHandler={this.selectNote.bind(this)}
                    editNoteOnHandler={this.editNoteOn.bind(this)}
                    editNoteOffHandler={this.editNoteOff.bind(this)} />
                </div>
            </div>    
        )
    }
}

const mapStateToProps = (state) => (
    {
        isFetching: state.api.isFetching,
        folders: {
            all: state.tree.folders,
            selected: state.tree.selectedFolder,
            editedFolder: state.tree.editableId
        },
        notes: {
            all: state.tree.searchText === null
                ? state.tree.notes.filter(i => i.directoryId === state.tree.selectedFolder)
                : (state.tree.isAdvancedSearch 
                    ? state.tree.notes.filter(i => (i.description !== undefined && i.description.indexOf(state.tree.searchText) >= 0)
                        || (i.tags !== undefined && i.tags.filter(t => t.indexOf(state.tree.searchText) >= 0).length > 0))
                    : state.tree.notes.filter(i => i.title.indexOf(state.tree.searchText) >= 0)
                ).filter(i => i.directoryId === state.tree.selectedFolder),
            selected: state.tree.selectedNote,
            editedNote: state.tree.editableNote
        }
    }
)

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeContainer)