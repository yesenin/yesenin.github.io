import React, {Component} from 'react'
import {connect} from 'react-redux'
import { closeEditor, saveEditor } from '../actions/editorActions'
import { saveNote, updateNote } from '../actions/noteActions'


class NoteEditor extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.note.title = event.target.value;
      }

    
    render() {
        return (this.props.note ? <div className= { "notesEditor" + (this.props.isOpen ? " on" : "") } >
            <div className="editorPart">
                <input name="title" type="text" placeholder="Title" className="editor"
                    defaultValue={this.props.note.title} onChange={this.handleChange}></input>
            </div>
            <div className="editorPart">
                Tags
            </div>
            <div className="editorPart">
                <textarea placeholder="Body"></textarea>
            </div>
            <div className="editorPart">
                <a href="#" onClick={() => { this.props.dispatch(closeEditor()) }}>Close</a>
                <a href="#" onClick={() => { this.props.note.id ? this.props.dispatch(updateNote(this.props.note)) : this.props.dispatch(saveNote(this.props.note)) }}>Save</a>
            </div>
        </div> :<div></div>)
    }
}

const mapToProps = (state) => {
    return {
        note: state.editor.note || state.notes.selected,
        isOpen: state.editor.isOpen
    }
}

export default connect(mapToProps)(NoteEditor)