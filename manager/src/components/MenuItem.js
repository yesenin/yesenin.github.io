import React, { Component } from 'react'

class MenuItem extends Component {
    render() {
        return (
            <span className="menuItem" onClick={this.props.onClickHandler}>{this.props.children}</span>
        )
    }
}

export default MenuItem