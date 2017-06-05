import React from 'react'
import PropTypes from 'prop-types'

import Radium from 'radium'
import styles from '../styles/app'

const Tree = ({items, parentId, selectedId, selectDirectory}) => {
    return <div style={[styles.tree]}>
        <ul style={[styles.ul]}>
            {items.filter(item => item.parentId === parentId).map((directory, i) =>
                <li key={i}>
                    <div
                        onClick={() => selectDirectory(directory.id)}
                        style={{ color: selectedId === directory.id ? 'red' : 'black' }}>
                        {directory.name}
                    </div>
                    <Tree items={items} parentId={directory.id} selectedId={selectedId} selectDirectory={selectDirectory}/>
                </li>)}
        </ul>
    </div>
}

Tree.propTypes = {
    items: PropTypes.any.isRequired,
    currentId: PropTypes.number,
    parentId: PropTypes.number,
    selectDirectory: PropTypes.func.isRequired
}

export default Radium(Tree)