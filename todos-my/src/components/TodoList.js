import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ foo, onTodoClick, selectedId }) => (
  <div>
  <ul>
    {foo.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick1={() => onTodoClick(todo.id)}
        id={todo.id}
        selectedId={selectedId}
      />
    )}
  </ul>
  <b>{ selectedId }</b>
  </div>
)

TodoList.propTypes = {
  foo: PropTypes.array.isRequired,
  selectedId: PropTypes.number.isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
