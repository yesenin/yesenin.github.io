import React, { PropTypes } from 'react'

const Todo = ({ onClick1, text, id, selectedId, children }) => (
  <li>
    <span onClick={onClick1} style={{
      textDecoration: id === selectedId ? 'line-through' : 'none'
    }}>{text}</span>
      <ul>
        {children.map(child =>
        <Todo
          key={child.id}
          {...child}
          onClick1={() => onClick1(child.id)}
          id={child.id}
          selectedId={selectedId}
        />
      )}
    </ul>
  </li>
)

Todo.propTypes = {
  onClick1: PropTypes.func,
  id: PropTypes.number.isRequired,
  selectedId: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.array
}

export default Todo
