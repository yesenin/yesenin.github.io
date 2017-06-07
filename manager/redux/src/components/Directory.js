import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveDirectory, editDirectory } from '../actions/directoryActions'

class Directory extends Component {
    constructor(props) {
        super(props)
        this.onKeyDown = this.onKeyDown.bind(this)
        this.onDoubleClick = this.onDoubleClick.bind(this)
    }

    onDoubleClick() {
        this.props.dispatch(editDirectory(this.props.directory.id))
    }

    onKeyDown(event) {
        if (event.keyCode === 13) {
            this.props.dispatch(editDirectory(null))
            this.props.dispatch(saveDirectory(Object.assign({}, this.props.directory, {name: event.target.value})))
        }
    }

    componentDidUpdate(){
        if (this.nameInput) {
            this.nameInput.setSelectionRange(0, this.nameInput.value.length)
            this.nameInput.focus()
        }
    }

    render() {return this.props.editingId === this.props.directory.id
        ? <input
            onClick={(e) => {e.stopPropagation()}}
            ref={(input) => { this.nameInput = input; }} 
            onKeyDown={this.onKeyDown}
            type="text" defaultValue={this.props.directory.name}></input>
        : <div
            style={{ color: this.props.isSelected ? 'red' : 'black' }}
            onClick={this.props.onClick}
            onDoubleClick={this.onDoubleClick}>{this.props.directory.name}</div>
    }
}

const mapToProps = (state) => {
    return {
        editingId: state.directories.editingId
    }
}

export default connect(mapToProps)(Directory)