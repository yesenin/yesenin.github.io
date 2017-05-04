import React from 'react'
import { findDOMNode } from 'react-dom';
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
      return {
        id: props.item.id,
        position: props.item.position
    };
  }
}

const noteTarget = {
    hover(props, monitor, component) {
      const dragIndex = monitor.getItem().id;
      const hoverIndex = props.item.id;
      if (dragIndex === hoverIndex) {
        return;
      }  
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
 
    props.swap(dragIndex, hoverIndex); 

      monitor.getItem().index = hoverIndex;  
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