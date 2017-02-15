import React from 'react'

export class List extends React.Component {
    render() {
        return <h1>{this.props.itemCount}</h1>
    }
}

export default List