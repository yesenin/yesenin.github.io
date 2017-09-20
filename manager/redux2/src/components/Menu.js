import React from 'react'
import PropTypes from 'prop-types'

const Menu = ({saveDirectory, saveNote, deleteDirectory}) => {
    return (
    <div className="menuBox">    
        <button type="button" onClick={saveDirectory}>
            <span>
                Add folder
            </span>
        </button>
        <button type="button" onClick={saveNote}>
            <span>
                Add note
            </span>
        </button>
        <button type="button" onClick={deleteDirectory}>
            <span>
                Delete selected
            </span>
        </button>
    </div>
    )
}

Menu.propTypes = {
    saveDirectory: PropTypes.func.isRequired,
    saveNote: PropTypes.func.isRequired,
    deleteDirectory: PropTypes.func.isRequired
}

export default Menu