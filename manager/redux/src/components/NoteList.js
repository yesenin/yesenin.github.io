import React, { Component } from 'react'

import Note from './Note'

class NoteList extends Component {
    render() {
        let renderedItems = this.props.items.map(item => <Note key={item.id} item={item}/>)
        return <div className='list'>{renderedItems}</div>
    }
}

export default NoteList