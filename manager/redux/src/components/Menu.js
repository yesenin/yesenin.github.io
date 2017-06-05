import React from 'react'
import PropTypes from 'prop-types'

import Radium from 'radium'
import styles from '../styles/app'

const Menu = ({saveDirectory, saveNote, deleteDirectory}) => {
    return (
        <aside style={[styles.menu]}>    
            <a href="#" onClick={saveDirectory} style={[styles.menuItem]}>Add a folder</a>
            <a href="#" onClick={saveNote} style={[styles.menuItem]}>Add a note</a>
            <a href="#" onClick={deleteDirectory} style={[styles.menuItem]}>Delete selected item</a>
        </aside>
    )
}

Menu.propTypes = {
    saveDirectory: PropTypes.func.isRequired,
    saveNote: PropTypes.func.isRequired,
    deleteDirectory: PropTypes.func.isRequired
}

export default Radium(Menu)