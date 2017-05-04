import React from 'react'

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Note from './Note'

const NoteList = ({items, selectNoteHandler, editNoteOnHandler, editNoteOffHandler, swap}) => {
    return (
        <div className='notes'>
            <div className='list'>
                {items.all.sort((a,b) => a.position - b.position).map(note => <Note key={note.id} item={note}
                    selected={note.id === items.selected} edited={note.id === items.editedNote}
                    clickHandler={selectNoteHandler} doubleClickHandler={editNoteOnHandler}
                    enterHandler={editNoteOffHandler} swap={swap}/>)}
            </div>
        </div>
    )
}

export default DragDropContext(HTML5Backend)(NoteList)