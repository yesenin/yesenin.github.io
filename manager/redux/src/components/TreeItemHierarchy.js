import React, { Component } from 'react'

class TreeItemHierarchy extends Component {
    constructor(props) {
        super(props);
        this.innerFoo= this.innerFoo.bind(this);
    }
    innerFoo(id) {
        this.props.foo(id)
    }

    render() {
        
        var rendered = this.props.items.map(i => {
            return <li key={i.id}><div onClick={() => this.innerFoo(i.id)} className={this.props.selectedId === i.id ? 'selected' : ''}>{i.id}</div>
                <TreeItemHierarchy items={i.children} selectedId={this.props.selectedId} foo={this.props.foo}/>
            </li>
        })
        return <ul>
            {rendered}
            </ul>
    }
}
export default TreeItemHierarchy