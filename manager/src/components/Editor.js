import React, { Component } from 'react'
import { connect } from 'react-redux';

import { selectNote, update } from '../actions/noteActions'
import { deleteNote } from '../actions/menuActions'

import MenuItem from './MenuItem'

const Tag = ({text, removeTag}) => {
    return (
        <span className="tag">{text}<i onClick={() => removeTag(text)}>x</i></span>
    )
}

class Editor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            note: props.selectedNote
        }
        this.changeTitle = this.changeTitle.bind(this)
        this.save = this.save.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)
        this.removeTag = this.removeTag.bind(this)
    }

    componentWillReceiveProps(props) {
        this.setState({
            note: props.selectedNote
        })
    }

    changeTitle(value) {
        this.setState({
            note: Object.assign({}, this.state.note, { title: value})
        })
    }   

    changeDescription(value) {
        this.setState({
            note: Object.assign({}, this.state.note, { description: value})
        })
    }

    save() {
        this.props.save(this.state.note)
    }
    
    onKeyDown(event) {
        if (event.keyCode === 13) {
            this.setState({
                note: Object.assign({}, this.state.note, { tags: [...this.state.note.tags, event.target.value]})
            })
            event.target.value = ""
        }
    }

    removeTag(t) {
        this.setState({
            note: Object.assign({}, this.state.note, { tags: this.state.note.tags.filter(x => x !== t)})
        })
    }

    render() {
        return (
            this.props.selectedNote 
            ? <div className="editor open">
                <div className="editor-row">
                    <label htmlFor="title">Title</label>
                    <input name="title" value={this.state.note.title} onChange={e => this.changeTitle(e.target.value)}/>
                </div>
                <div className="editor-row" title="To delete tag click 'X'. To add new press Enter after input">
                    <label htmlFor="tags">Tags</label>
                    <div className="tag-list">
                        {this.state.note.tags.map(x => <Tag key={x} text={x} removeTag={t => this.removeTag(t)}/>)}
                    </div>
                    <input name="tags" defaultValue={""} onKeyDown={this.onKeyDown}/>
                </div>
                <div className="editor-row">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" cols="30" rows="10"
                    value={this.state.note.description} onChange={e => this.changeDescription(e.target.value)}></textarea>
                </div>
                <div className="editor-row">
                    {/* <MenuItem onClickHandler={this.props.close}
                        >Close</MenuItem> */}
                    <MenuItem
                        onClickHandler={() => this.props.delete(this.state.note.id)}
                        title="Delete note">Delete</MenuItem>
                    <MenuItem
                        onClickHandler={this.save}
                        title="Save changes">Save</MenuItem>
                </div>
            </div> 
            : <div className="editor"></div>
        )
    }
}

export default connect(
    (state, ownProps) => {
        return {
            selectedNote: state.notes.selected
        }
    },
    (dispatch) => {
        return {
            close: () => dispatch(selectNote(null)),
            save: (note) => dispatch(update(note)),
            delete: (id) => dispatch(deleteNote(id))
        }
    })(Editor)