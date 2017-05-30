import React from 'react'

const Tree = ({directories}) => {
    return <div>
        <ul>
            {directories.all.map((directory, i) => <ul key={i}>{directory.name}</ul>)}
        </ul>
    </div>
}

export default Tree