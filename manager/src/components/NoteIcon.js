import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { DragSource, DropTarget } from 'react-dnd';

import Name from './Name'

import { selectNote, update, loadNotes } from '../actions/noteActions'

const noteSource = {
    beginDrag(props) {
        return {
            note: props.note
        };
    }
}

function collectSource(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

const noteTarget = {
    drop(props, monitor, component) {
        const a = monitor.getItem().note
        const b = props.note
        if (a.id === b.id) {
            return;
        }  
        props.swap(a, b); 
    }
}

function collectTarget(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}

class NoteIcon extends Component {
    constructor(props) {
        super(props)
        this.updateName = this.updateName.bind(this)
    }

    updateName(title) {
        this.props.update(Object.assign({}, this.props.note, { title }))
    }

    render() {
        const { connectDragSource, connectDropTarget } = this.props;
        return connectDragSource(connectDropTarget(
            <div className={this.props.note.id === (this.props.selected && this.props.selected.id) ? "note selected" : "note"}>
                <Link to={`/${this.props.note.directoryId}/${this.props.note.id}`}>
                    <div className="icon">
                    </div>
                    <Name name={this.props.note.title} onSave={title => this.updateName(title)}/>
                </Link>
            </div>
        ))
    }
}

NoteIcon = DragSource('NoteIcon', noteSource, collectSource)(NoteIcon)
NoteIcon = DropTarget('NoteIcon', noteTarget, collectTarget)(NoteIcon)

export default connect(
    (state, ownProps) => {
        return {
            selected: state.notes.selected
        }
    },
    (dispatch) => {
        return {
            selectNote: (id) => dispatch(selectNote(id)),
            update: (note) => dispatch(update(note)),
            swap: (a, b) => {
                const a_position = a.position
                const b_position = b.position
                dispatch(update(Object.assign({}, a, { position: b_position})))
                    .then(() => dispatch(update(Object.assign({}, b, { position: a_position}))))
                    .then(() => dispatch(loadNotes()))
                    .then(() => dispatch(selectNote(a.id)))
            }
        }
    })(NoteIcon)