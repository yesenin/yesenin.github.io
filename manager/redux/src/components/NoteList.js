import React from 'react'

const Note = ({item, selected, edited, clickHandler, doubleClickHandler, enterHandler}) => {
    return <div className={selected ? 'note selected' : 'note'}>
            <div className='icon' onClick={() => clickHandler(item.id)}></div>
            {edited
                ? <input type='text' defaultValue={item.name} onKeyUp={(e) => enterHandler(item.id, e)}  autoFocus/>
                : <span className='text' onDoubleClick={(e) => doubleClickHandler(item.id, e)}>{item.name}</span>
            }
        </div>
}

const NoteList = ({items, selectNoteHandler, editNoteOnHandler, editNoteOffHandler}) => {
    return (
        <div className='notes'>
            <div className='list'>
                {items.all.map(note => <Note key={note.id} item={note}
                    selected={note.id === items.selected} edited={note.id === items.editedNote}
                    clickHandler={selectNoteHandler} doubleClickHandler={editNoteOnHandler}
                    enterHandler={editNoteOffHandler} />)}
            </div>
        </div>
    )
}

export default NoteList