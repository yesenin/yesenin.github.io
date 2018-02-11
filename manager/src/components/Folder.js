import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { updateFolder } from '../actions/folderActions'

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
                    <div className={this.props.selectedId === this.props.folder.id ? "folder selected" : "folder"}>
                        <Name name={this.props.folder.name} onSave={x => this.updateFolder(x)}>
                            {this.props.notesCount > 0 ? this.props.notesCount : ""}
                        </Name>
                    </div>
                </Link>
                <Tree parentId={this.props.folder.id} />
            </li>
        )
    }
}

Folder.propTypes = {
    folder: PropTypes.object.isRequired,
    notesCount: PropTypes.number.isRequired,
    selectedId: PropTypes.number
}

export default connect(
    (state, ownProps) => {
        return {
            notesCount: state.notes.list.filter(x => x.directoryId === ownProps.folder.id).length,
            selectedId: state.folders.selected && state.folders.selected.id
        }
    },
    (dispatch) => {
        return {
            updateFolder: (id, name, parentId) => dispatch(updateFolder(id, name, parentId))
        }
    })(Folder)