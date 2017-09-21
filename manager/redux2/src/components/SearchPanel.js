import React, { Component } from 'react'

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
        this.state = {
            mode: props.initMode
        };
    }

    onClick() {
        this.setState(
            {
                mode: !this.state.mode
            }
        )
    }

    render() {
        return (
            <div className="searchBox">
                <label>
                    <span>Advanced</span>
                    <span onClick={this.onClick} className={"searchMode" + (this.state.mode ? " on" : "")}>
                    </span>
                </label>
                <input type="text" />                   
            </div>
            )
    }
}

export default SearchPanel