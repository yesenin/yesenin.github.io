import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'

import * as menuActions from '../actions/menuActions'
import { selectNote } from '../actions/noteAction'

import MenuItem from './MenuItem'

class Menu extends Component {
    constructor(props) {
        super(props)

        this.delete = this.delete.bind(this)
    }

    delete() {
        if (this.props.selectedNote) {
            this.props.deleteNote(this.props.selectedNote)
        } else if (this.props.parentForSelected && !this.props.hasChildren && !this.props.hasNotes) {
            this.props.deleteFolder(this.props.selectedFolder)
        }
    }

    render() {
        return (
            <div className="menu">
                <MenuItem onClickHandler={() => this.props.addFolder('New folder', this.props.selectedFolder)}>Add folder</MenuItem>
                <MenuItem onClickHandler={() => this.props.addNote('New note', this.props.selectedFolder)}>Add note</MenuItem>
                <MenuItem onClickHandler={this.delete}>Delete</MenuItem>
            </div>
        )
    }
}

export default connect(
    (state, ownProps) => {
        return {
            selectedFolder: state.folders.selectedId,
            parentForSelected: state.folders.selectedId
                ? state.folders.list.filter(x => x.id === state.folders.selectedId)[0].parentId
                : null,
            hasChildren: state.folders.list.filter(x => x.parentId === state.folders.selectedId).length > 0,
            hasNotes: state.notes.list.filter(x => x.directoryId === state.folders.selectedId).length > 0,
            selectedNote: state.notes.selectedId
        }
    },
    (dispatch) => {
        //return bindActionCreators(require('../actions/menuActions'), dispatch)
        return {
            addFolder: (name, parentId) => {
                dispatch(selectNote(null))
                dispatch(menuActions.addFolder(name, parentId))
            },
            addNote: (name, parentId) => {
                dispatch(selectNote(null))
                dispatch(menuActions.addNote(name, parentId))
            },
            deleteFolder: (id) => dispatch(menuActions.deleteFolder(id)),
            deleteNote: (id) => dispatch(menuActions.deleteNote(id))
        }
    })(Menu)