import React, { Component } from 'react'

class Note extends Component {
    render() {
        return <div className={this.props.selectedNote === this.props.item.id ? 'note selected' : 'note'} 
            key={this.props.item.id} onClick={() => this.innerSelectNote(this.props.item.id)}
            onDoubleClick={() => this.innerDoubleClick(this.props.item.id)} title={this.props.item.name}>
                <div className='icon'></div>
                { this.props.editableNote === this.props.item.id
                    ? <input type='text' defaultValue={this.props.item.name}
                        onKeyPress={this.handleChange1.bind(this)}    
                        onKeyUp={this.handleChange.bind(this, this.props.item.id)} />
                    : <span className='text'>{this.props.item.name}</span>}
                </div>
    }
}

export default Note