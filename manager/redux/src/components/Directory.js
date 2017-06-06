import React, { Component } from 'react'

class Directory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false
        }
        this.onKeyDown = this.onKeyDown.bind(this)
        this.onDoubleClick = this.onDoubleClick.bind(this)
    }

    onDoubleClick() {
        this.setState({
            isEditing: true
        })
    }

    onKeyDown(event) {
        if (event.keyCode === 13) {
            this.setState({
                isEditing: false
            })
        }
    }

    // = ({name, onClick, onDoubleClick, isSelected, isEditing}) => {
    render() {return this.state.isEditing 
        ? <input
            onKeyDown={this.onKeyDown}
            type="text" defaultValue={this.props.name}></input>
        : <div
            style={{ color: this.props.isSelected ? 'red' : 'black' }}
            onClick={this.props.onClick}
            onDoubleClick={this.onDoubleClick}>{this.props.name}</div>
    }
}

export default Directory