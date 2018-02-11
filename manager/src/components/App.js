import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import MenuItem from './MenuItem'
import Tree from './Tree'
import NoteList from './NoteList'
import Editor from './Editor'
import Spinner from './Spinner'
import NewSearch from './NewSearch'
import { selectFolder, loadFolders } from '../actions/folderActions'
import { changeState, changeQuery } from '../actions/searchActions'
import * as menuActions from '../actions/menuActions'
import { selectNote, loadNotes} from '../actions/noteActions'

class App extends Component {
    constructor(props) {
        super(props)
        this.delete = this.delete.bind(this)
        this.props.init()
    }

    delete() {
        if (this.props.selectedNote) {
            this.props.deleteNote(this.props.selectedNote.id)
        } else {
            this.props.deleteFolder(this.props.selectedFolder.id)
        }
    }

    componentWillReceiveProps(nextProps) {
        
        if (nextProps.match.path === '/:directory?/:note?') {
            this.props.changeState(false)
            const directoryId = parseInt(nextProps.match.params.directory, 10)
            if (directoryId) {
                if (!this.props.selectedFolder || (this.props.selectedFolder && directoryId !== this.props.selectedFolder.id)) {
                    this.props.selectFolder(directoryId)
                }
            }
            const noteId = parseInt(nextProps.match.params.note, 10)
            if (noteId) {
                this.props.selectNote(noteId)
            }
        }
        else if (nextProps.match.path === '/search') {

            this.props.changeState(true)
            this.props.changeQuery(new URLSearchParams(nextProps.location.search).get('q') || '', false)
        }
        else if (nextProps.match.path === '/advanced_search') {
            this.props.changeState(true)
            this.props.changeQuery(new URLSearchParams(nextProps.location.search).get('q') || '', true)
        }
        else {
            this.props.changeState(false)
            //this.props.selectFolder(1)
        }
    }

    render() {
        return (
            <div>
                <div className="manager">
                    <div className="col">
                        <div className="menu">
                            <MenuItem
                                onClickHandler={() => this.props.addFolder('New folder', this.props.selectedFolder.id)}
                                title="Add a new folder, selected folder will be parent">Add folder</MenuItem>
                            <MenuItem
                                onClickHandler={() => this.props.addNote('New note', this.props.selectedFolder.id)}
                                title="Add a new note to the selected directory">Add note</MenuItem>
                            <MenuItem
                                onClickHandler={this.delete}
                                title="Delete selected item">Delete</MenuItem>
                        </div>
                        <Tree selectedId={this.props.selectedFolder}/>
                    </div>
                    <div className="col col-notes">
                        <div>
                            <MenuItem onClickHandler={() => this.props.history.push('/search')} title="Open search popup">Search</MenuItem>
                        </div>
                        <NoteList/>
                    </div>
                    <div className="col">
                        <Editor/>
                    </div>
                </div>
                <NewSearch/>
                <Spinner mode={this.props.isRequesting} />
            </div>
        )
    }
}

App.propTypes = {
    addFolder: PropTypes.func.isRequired,
    addNote: PropTypes.func.isRequired,
    deleteFolder: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired,
    changeState: PropTypes.func.isRequired,
    isRequesting: PropTypes.bool.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        directoryCount: state.folders.list.length,
        isRequesting: state.api.isRequesting,
        selectedFolder: state.folders.selected,
        selectedNote: state.notes.selected
    }
}

export default connect(
    mapStateToProps,
    (dispatch) => {
        return {
            init: () => {
                dispatch(loadFolders())
                    .then(() => dispatch(loadNotes()))
                    //.then(() => dispatch(selectFolder(1)))
            },
            changeState: (isOpen) => dispatch(changeState(isOpen)),
            changeQuery: (query, isAdvanced) => dispatch(changeQuery(query, isAdvanced)),
            addFolder: (name, parentId) => {
                dispatch(selectNote(null))
                dispatch(menuActions.addFolder(name, parentId))
            },
            addNote: (name, parentId) => {
                dispatch(selectNote(null))
                dispatch(menuActions.addNote(name, parentId))
            },
            deleteFolder: (id) => dispatch(menuActions.deleteFolder(id)),
            deleteNote: (id) => dispatch(menuActions.deleteNote(id)),
            selectFolder: (id) => dispatch(selectFolder(id)),
            selectNote: (id) => dispatch(selectNote(id))
        }
    })(withRouter(App))