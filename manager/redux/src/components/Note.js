import React from 'react'

import { DragSource, DropTarget } from 'react-dnd';

const Note = ({ item, selected, edited, clickHandler, doubleClickHandler, enterHandler, connectDragSource, connectDropTarget, isDragging, swap }) => {
    return connectDropTarget(connectDragSource(<div className={selected ? 'note selected' : 'note'} style={{opacity: isDragging ? 0.5 : 1}}>
            <div className='icon' onClick={() => clickHandler(item.id)}></div>
            {edited
                ? <input type='text' defaultValue={item.title} onKeyUp={(e) => enterHandler(item, e)}  autoFocus/>
                : <span className='text' onDoubleClick={(e) => doubleClickHandler(item.id, e)}>{item.title}</span>
            }
        </div>))
}

const noteSource = {
    beginDrag(props) {
      console.log(props)
      return {
        id: props.item.id,
        position: props.item.position
    };
  }
}

const noteTarget = {
  drop(props) {
      console.log(props.item.position)
      props.swap({
          id: props.item.id,
          position: props.item.position
      });  
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

function collect1(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

let DragSourceNote = DragSource('note', noteSource, collect)(Note)
let DropTargetNote = DropTarget('note', noteTarget, collect1)(DragSourceNote)
export default DropTargetNote