import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editNote, updateNote } from '../actions/noteActions'
//import { findDOMNode } from 'react-dom';
//import { DragSource, DropTarget } from 'react-dnd';

class Note extends Component {
  constructor(props) {
      super(props)
      this.onKeyDown = this.onKeyDown.bind(this)
      this.onDoubleClick = this.onDoubleClick.bind(this)
  }

  onDoubleClick() {
      this.props.dispatch(editNote(this.props.note.id))
  }

  onKeyDown(event) {
    if (event.keyCode === 13) {
      this.props.dispatch(editNote(null))
          this.props.dispatch(updateNote(Object.assign({}, this.props.note, {title: event.target.value})))
          //this.props.dispatch(saveDirectory(Object.assign({}, this.props.directory, {name: event.target.value})))
      }
  }

  componentDidUpdate(){
        if (this.titleInput) {
            this.titleInput.setSelectionRange(0, this.titleInput.value.length)
            this.titleInput.focus()
        }
    }

  render() {
    return <div onClick={this.props.select}>
        { 
          this.props.editingId === this.props.note.id 
            ? <input
              ref={(input) => { this.titleInput = input; }}
              onClick={(e) => {e.stopPropagation()}}
              onKeyDown={this.onKeyDown}
              defaultValue={this.props.note.title}></input>
            : <span 
                onDoubleClick={this.onDoubleClick}
                style={{ color: this.props.isSelected ? 'red' : 'black' }}>
                {this.props.note.title}</span>
        }
        </div>
  }
}
const mapToProps = (state) => {
    return {
        editingId: state.notes.editingId
    }
}
export default connect(mapToProps)(Note)
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