import React from 'react'

const Note = () => {
    return <h1>Note</h1>
}

const NoteList = ({items}) => {
    return (
        <div className='notes'>
            <div className='list'>
                {items.map(item => <Note key={item.id} item={item}/>)}
            </div>
        </div>
    )
}

export default NoteList