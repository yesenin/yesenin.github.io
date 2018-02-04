import React, { Component } from 'react'
import { connect } from 'react-redux'

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import NoteIcon from './NoteIcon'

class NoteList extends Component {
    render() {
        return (
            <div className="notes">
                {this.props.notes.list.map(x => <NoteIcon key={x.id} note={x}/>)}
            </div>
        )
    }
}

const connectedNoteList = connect(
    (state, ownProps) => {
        return {
            notes: {
                list: state.notes.current.filter(x => x.directoryId === state.folders.selectedId),
                selectedId: state.notes.selectedId
            }
        }
    },
    (dispatch) => {
        return {}
    })(NoteList)

export default DragDropContext(HTML5Backend)(connectedNoteList)