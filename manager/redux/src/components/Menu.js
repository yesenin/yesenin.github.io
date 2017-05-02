import React from 'react'

const Menu = ({addFolder, addNote, remove}) => {
    return (
        <div className='menu'>
            <div className='menuItem' onClick={addFolder} title="Add folder">
                <div className='icon'></div>
                <span className='text'>Add folder</span></div>
            <div className='menuItem' onClick={addNote} title="Add note">
                <div className='icon'></div>
                <span className='text'>Add note</span></div>
            <div className='menuItem' onClick={remove} title="Remove">
                <div className='icon'></div>
                <span className='text'>Remove</span></div>
        </div>
    )
}

export default Menu