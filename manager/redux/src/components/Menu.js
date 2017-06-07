import React from 'react'
import PropTypes from 'prop-types'

const Menu = ({saveDirectory, saveNote, deleteDirectory}) => {
    return (
        <div>    
            <a href="#" onClick={saveDirectory}>Add a folder</a>
            <a href="#" onClick={saveNote}>Add a note</a>
            <a href="#" onClick={deleteDirectory}>Delete selected item</a>
        </div>
    )
}

Menu.propTypes = {
    saveDirectory: PropTypes.func.isRequired,
    saveNote: PropTypes.func.isRequired,
    deleteDirectory: PropTypes.func.isRequired
}

export default Menu