import React, { Component } from 'react'

class TreeItemHierarchy extends Component {
    isEdit = false

    constructor(props) {
        super(props);
        this.innerFoo = this.innerFoo.bind(this);
        this.innerDoubleClick = this.innerDoubleClick.bind(this);
        this.closeEdit = this.closeEdit.bind(this);
    }
    innerFoo(id) {
        if (this.props.selectedId !== id) {
            this.props.foo(id)
        }
    }

    innerDoubleClick(id) {
        if (this.props.selectedId !== id) { 
            this.props.foo(id)
        } else {
            this.props.bar(true, id)
        }
    }

    closeEdit(event) {
        console.log(event)
        if(event.target.keyCode === 13) {
            this.props.bar(false, null)
        } else if (event.keyCode === 27) {
            this.props.bar(false, null)
        }
    }

    handleChange(id, event) {
        this.props.rename(id, event.target.value)
    }

    render() {
        
        var rendered = this.props.items.filter(l => l.parent === this.props.id).map(i => {
            return <li key={i.id}><div onDoubleClick={() => this.innerDoubleClick(i.id)} 
                onClick={() => this.innerFoo(i.id)} 
                className={this.props.selectedId === i.id ? 'selected' : ''}>
                    { 
                        this.props.editableId === i.id
                            ? <input type="text" value={i.name}
                            onKeyPress={this.closeEdit} 
                            onChange={this.handleChange.bind(this, i.id)}/>
                            : i.name
                    } 
                </div>
                <TreeItemHierarchy id={i.id} items={this.props.items} 
                selectedId={this.props.selectedId} foo={this.props.foo}
                editableId={this.props.editableId} bar={this.props.bar}
                rename={this.props.rename}/>
            </li>
        })
        return <ul>
            {rendered}
            </ul>
    }
}
export default TreeItemHierarchy