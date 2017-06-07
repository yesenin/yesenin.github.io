import React from 'react'
import PropTypes from 'prop-types'
import Directory from './Directory'

import Radium from 'radium'
import styles from '../styles/app'

const Tree = ({items, parentId, selectedId, editingId, selectDirectory, editDirectory}) => {
    return <div style={[styles.tree]}>
        <ul style={[styles.ul]}>
            {items.filter(item => item.parentId === parentId).map((directory, i) =>
                <li key={i}>
                    <Directory 
                        directory={directory}
                        onClick={() => selectDirectory(directory.id)}
                        onDoubleClick={() => editDirectory(directory.id)}
                        isSelected={selectedId === directory.id}
                        isEditing={editingId === directory.id}/>
                    <Tree 
                        items={items}
                        parentId={directory.id}
                        selectedId={selectedId}
                        editingId={editingId}
                        selectDirectory={selectDirectory}
                        editDirectory={editDirectory}/>
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