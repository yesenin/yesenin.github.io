import React from 'react'

const Folder = ({item, selected}) => {
    return <li>
        <div className={selected ? 'selected' : ''}>{item.name}</div>
        <Node items={item.children} />
    </li>
}

const Node = ({items, selectedItem}) => {
    return <ul>
        {items.map(item => {
            return <Folder key={item.id} item={item} selected={item.id === selectedItem}/>
        })}
    </ul>
}

const FolderTree = ({folders, selectedFolder}) => {
    return (
        <div className="tree">
            <Node items={folders} selectedItem={selectedFolder}/>
        </div>
    )
}

export default FolderTree