import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectNote} from '../actions/noteActions'

class NoteEditor extends Component {
    render() {
        return <div>
            <div>
                {this.props.note.id}
            </div>
            <div>
                <label htmlFor="title">Title:</label>
                <input name="title" type="text" defaultValue={this.props.note.title}></input>
            </div>
            <div>
                Tags
            </div>
            <div>
                Text
            </div>
            <div>
                <a href="#" onClick={() => {this.props.dispatch(selectNote(null))}}>Close</a>
            </div>
        </div>
    }
}

const mapToProps = (state) => {
    return {
        note: state.notes.selected
    }
}

export default connect(mapToProps)(NoteEditor)