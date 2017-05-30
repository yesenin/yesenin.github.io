import React from 'react'

const Tree = ({directories, selectDirectory}) => {
    return <div>
        <ul>
            {directories.all.map((directory, i) => <ul key={i}><div onClick={() => selectDirectory(directory.id)} style={{color: directories.selectedId === directory.id ? 'red' : 'black'}}>{directory.name}</div></ul>)}
        </ul>
    </div>
}

export default Tree