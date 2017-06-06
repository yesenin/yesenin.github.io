import React from 'react'
import Note from './Note'

import Radium from 'radium'
import styles from '../styles/app'

const Notes = ({ notes, select }) => {
    return <div style={[styles.notes]}>
        {notes.all.map((note, i) => <Note key={i} note={note} isSelected={notes.selectedId === note.id} select={() => select(note.id)}/>)}
        </div>
}

export default Radium(Notes)