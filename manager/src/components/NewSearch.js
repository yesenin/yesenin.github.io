import React from 'react'

import Search from './Search'

const NewSearch = ({mode, close}) => {
    return (
        <div className={"spinner" + (mode ? " on" : "")}>
            <b onClick={close}>X</b>
            <Search />
            <div>
                Search result
            </div>
        </div>
    )
}

export default NewSearch