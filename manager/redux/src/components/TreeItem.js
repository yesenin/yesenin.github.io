import React, { Component } from 'react'

class TreeItem extends Component {
    isEdit = false

    constructor(props) {
        super(props)
        this.innerFoo = this.innerFoo.bind(this)
        this.innerDoubleClick = this.innerDoubleClick.bind(this)
        this.handleChange1 = this.handleChange1.bind(this)
    }
    innerFoo(id) {
        if (this.props.selectedId !== id) {
            this.props.foo(id)
        }
    }

    innerDoubleClick(id, event) {
        if (this.props.selectedId !== id) { 
            this.props.foo(id)
        } else {
            this.props.bar(true, id)
        
        }
    }

    handleChange(id, event) {
        this.props.rename(id, event.target.value)  
    }

    handleChange1(event) {
        if (event.charCode === 13 || event.charCode === 27) {
            this.props.bar(false, null)
        }    
    }
    
    render() {
        
        var rendered = this.props.items.filter(l => l.parent === this.props.id).map(i => {
            return <li key={i.id}><div onDoubleClick={this.innerDoubleClick.bind(this, i.id)} 
                onClick={() => this.innerFoo(i.id)} 
                className={this.props.selectedId === i.id ? 'selected' : ''} title={i.name + "\nDouble click to rename"}>
                    { 
                        this.props.editableId === i.id
                        ? <input type="text" defaultValue={i.name}
                            onKeyPress={this.handleChange1}
                            onKeyUp={this.handleChange.bind(this, i.id)}/>
                            : i.name
                    } 
                </div>
                <TreeItem id={i.id} items={this.props.items} 
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
export default TreeItem