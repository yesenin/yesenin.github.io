import React from 'react'

const Spinner = ({mode}) => {
    return (
        <div className={"overlay" + (mode ? " on" : "")}>
            <div className="spinner">
                <span>Loading...</span>
            </div>
        </div>
    )
}

export default Spinner