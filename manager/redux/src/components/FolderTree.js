import React from 'react'
import { Link } from 'react-router-dom'

const Folder = ({allItems, item, clickHandler}) => {
    return <li>
        <Link to={'/' + item.id}><div className={allItems.selected === item.id ? 'selected' : ''}
            onClick={() => clickHandler(item.id)}>{item.name + ' ' + item.id}</div></Link>
        <Node
            allItems={allItems}
            items={allItems.all.filter((i) => { return i.parentId === item.id })}
            clickHandler={clickHandler} />
    </li>
}

const Node = ({allItems, items, clickHandler}) => {
    return <ul>
        { items.map(i => <Folder key={i.id} allItems={allItems} item={i} clickHandler={clickHandler}/>) }
    </ul>
}

const FolderTree = ({items, folderClickHandler}) => {
    return (
        <div className="tree">
            <Node allItems={items} items={items.all.filter((i) => { return i.id === 1 })} clickHandler={folderClickHandler} />
        </div>
    )
}

export default FolderTree