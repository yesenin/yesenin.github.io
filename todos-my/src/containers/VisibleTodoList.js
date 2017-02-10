import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const VisibleTodoList = connect(
  (state) => ({
    foo: state.todos.items,
    selectedId: state.todos.selectedId
  }),
  ({
    onTodoClick: toggleTodo
  })
)(TodoList)

export default VisibleTodoList
