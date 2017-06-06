import React from 'react'
//import { findDOMNode } from 'react-dom';
//import { DragSource, DropTarget } from 'react-dnd';

const Note = ({ note, isSelected, select }) => {
    return <div onClick={select}>
            <span className='text' style={{ color: isSelected ? 'red' : 'black' }}>{note.title}</span>
        </div>
}
export default Note
/*
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
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
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
*/