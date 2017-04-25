import React, { Component } from 'react'

class TreeItem extends Component {
    constructor(props) {
        super(props);
        this.innerFoo= this.innerFoo.bind(this);
    }
    innerFoo() {
        this.props.foo(this.props.item.id)
    }
    render() {
        return <li onClick={this.innerFoo}>{this.props.selected ? <b>{this.props.item.name}</b> : this.props.item.name} <i>{this.props.item.parent}-{this.props.item.id}</i></li>
    }
}

export default TreeItem