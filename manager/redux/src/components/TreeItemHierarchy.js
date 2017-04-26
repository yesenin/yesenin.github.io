import React, { Component } from 'react'

class TreeItemHierarchy extends Component {
    render() {
        
        var rendered = this.props.items.map(i => {
            return <li key={i.id}><div>{i.id}</div>
                <TreeItemHierarchy items={i.children} />
            </li>
        })
        return <ul>
            {rendered}
            </ul>
    }
}
export default TreeItemHierarchy