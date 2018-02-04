import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { selectFolder, updateFolder } from '../actions/folderActions'
import { selectNote } from '../actions/noteAction'

import Tree from './Tree'
import Name from './Name'

class Folder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false
        }
        this.updateFolder = this.updateFolder.bind(this)
    }

    updateFolder(name) {
        this.props.updateFolder(this.props.folder.id, name, this.props.folder.parentId)
    }

    render() {
        return (
            <li>
                <Link to={`/${this.props.folder.id}`}>
                    <div className={this.props.folder.id == this.props.selectedId ? "folder selected" : "folder"} onClick={() => this.props.selectFolder(this.props.folder.id)}>
                        <Name name={this.props.folder.name} onSave={x => this.updateFolder(x)}>
                            {this.props.notesCount > 0 ? this.props.notesCount : ""}
                        </Name>
                    </div>
                </Link>
                <Tree parentId={this.props.folder.id}/>
            </li>
        )
    }
}

export default connect(
    (state, ownProps) => {
        return {
            notesCount: state.notes.list.filter(x => x.directoryId === ownProps.folder.id).length,
            selectedId: state.folders.selectedId
        }
    },
    (dispatch) => {
        return {
            selectFolder: (id) => {
                dispatch(selectFolder(id));
                dispatch(selectNote(null));
            },
            updateFolder: (id, name, parentId) => dispatch(updateFolder(id, name, parentId))
        }
    })(Folder)