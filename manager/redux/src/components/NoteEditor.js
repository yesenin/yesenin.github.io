import React, {Component} from 'react'
import {connect} from 'react-redux'

class NoteEditor extends Component {
    render() {
        return <div>
            <div>
                <label htmlFor="title">Title:</label>
                <input name="title" type="text" defaultValue={this.props.note.title}></input>
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