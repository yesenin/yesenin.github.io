import React from 'react'
import Note from './Note'
import NoteEditor from './NoteEditor'

import SearchPanel from './SearchPanel'

const Notes = ({ notes, select }) => {
    return (
    <div>
        <SearchPanel />
        <div>
            {notes.all.map((note, i) => <Note
                key={i}
                note={note}
                isSelected={notes.selected && notes.selected.id === note.id}
                select={() => select(note.id)}
            />)}
        </div> 
    </div>
    )    
}

export default Notes