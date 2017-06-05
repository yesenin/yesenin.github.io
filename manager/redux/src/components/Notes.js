import React from 'react'
import PropTypes from 'prop-types'

import Radium from 'radium'
import styles from '../styles/app'

const Notes = ({ items }) => {
    return <div style={[styles.notes]}>
        {items.map((note, i) => <li key={i}>{note.name}</li>)}
        </div>
}

export default Radium(Notes)