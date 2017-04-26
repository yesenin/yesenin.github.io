import React, { Component } from 'react'

class TreeItemHierarchy extends Component {
    constructor(props) {
        super(props);
        this.innerFoo = this.innerFoo.bind(this);
        this.innerDoubleClick = this.innerDoubleClick.bind(this);
    }
    innerFoo(id) {
        this.props.foo(id)
    }

    innerDoubleClick(id) {
        if (this.props.selectedId !== id) { 
            this.props.foo(id)
        } else {
            console.log('edit ' + id)
        }
    }

    render() {
        
        var rendered = this.props.items.filter(l => l.parent === this.props.id).map(i => {
            return <li key={i.id}><div onDoubleClick={() => this.innerDoubleClick(i.id)} onClick={() => this.innerFoo(i.id)} className={this.props.selectedId === i.id ? 'selected' : ''}>{i.name}</div>
                <TreeItemHierarchy id={i.id} items={this.props.items} selectedId={this.props.selectedId} foo={this.props.foo}/>
            </li>
        })
        return <ul>
            {rendered}
            </ul>
    }
}
export default TreeItemHierarchy