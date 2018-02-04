import React from 'react'

const Spinner = ({mode}) => {
    return (
        <div className={"spinner" + (mode ? " on" : "")}>Loading...</div>
    )
}

export default Spinner