import React, { Component } from 'react'

class Name extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false
        }
        this.enterEditMode = this.enterEditMode.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)
    }

    componentDidUpdate(){
        if (this.titleInput) {
            this.titleInput.setSelectionRange(0, this.titleInput.value.length)
            this.titleInput.focus()
        }
    }

    enterEditMode() {
        this.setState({
            isEditing: true
        })
    }

    onKeyDown(event) {
        if (event.keyCode === 13) {
            this.setState({
                isEditing: false
            })
            this.props.onSave(event.target.value)
        }
        if (event.keyCode === 27) {
            this.setState({
                isEditing: false
            })
        }
    }

    render() {
        return (
            this.state.isEditing
                ? <input defaultValue={this.props.name} 
                    ref={(input) => { this.titleInput = input; }}
                    onClick={(e) => {e.stopPropagation()}}
                    onKeyDown={this.onKeyDown}/>
                : <span onDoubleClick={this.enterEditMode} title="Double click to edit, Enter — save, Esc — cancel">
                    {this.props.name} {
                        this.props.children && <i>{this.props.children}</i> 
                    }</span>
        )
    }
}

export default Name