import React from 'react'
import Note from './Note'
import NoteEditor from './NoteEditor'

import Radium from 'radium'
import styles from '../styles/app'

const Notes = ({ notes, select }) => {
    return <div style={[styles.notes]}>
        <div>
        {notes.all.map((note, i) => <Note key={i} note={note} isSelected={notes.selected && notes.selected.id === note.id} select={() => select(note.id)}/>)}
        </div> 
        {
            notes.selected && <NoteEditor />
        }
        </div>
}

export default Radium(Notes)