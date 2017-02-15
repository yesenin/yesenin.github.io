import React from 'react'

export class Tree extends React.Component {
    render() {
        return <h1>{this.props.folderCount}</h1>
    }
}

export default Tree