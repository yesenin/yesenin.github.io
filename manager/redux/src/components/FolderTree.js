import React from 'react'
//import { Link } from 'react-router-dom'

const Folder = ({allItems, item, clickHandler, doubleClickHandler, keyHandler}) => {
    return <li>
        { allItems.editedFolder === item.id 
        ? <input type='text' defaultValue={item.name} onKeyUp={(e) => keyHandler(item, e)}  autoFocus/>
        : <div className={allItems.selected === item.id ? 'selected' : ''}
            onClick={() => clickHandler(item.id)}
            onDoubleClick={() => doubleClickHandler(item.id)}>{item.name}</div>}
        <Node
            allItems={allItems}
            items={allItems.all.filter((i) => { return i.parentId === item.id })}
            clickHandler={clickHandler} 
            doubleClickHandler2={doubleClickHandler} 
            keyHandler={keyHandler}/>
    </li>
}

const Node = ({allItems, items, clickHandler, doubleClickHandler2, keyHandler}) => {
    return <ul>
        { items.map(i => <Folder key={i.id} allItems={allItems} item={i} 
        clickHandler={clickHandler} doubleClickHandler={doubleClickHandler2}
        keyHandler={keyHandler}/>) }
    </ul>
}

const FolderTree = ({items, isFetching, folderClickHandler, doubleClickHandler1, keyHandler}) => {
    return (<div className="tree" style={{ opacity: isFetching ? 0.5 : 1 }}>
                <Node allItems={items} items={[items.all[0]]} 
                clickHandler={folderClickHandler}
                doubleClickHandler2={doubleClickHandler1}
                keyHandler={keyHandler}/>
            </div>
    )
}

export default FolderTree