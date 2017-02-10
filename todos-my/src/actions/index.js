let nextTodoId = 3
export const addFolder = (text, parent) => ({
  type: 'ADD_FOLDER',
  id: nextTodoId++,
  text,
  parentId: parent
})

export const addItem = (id) => ({
  type: 'ADD_ITEM',
  id
})

export const removeFolder = (id) => ({
  type: 'REMOVE_FOLDER',
  id
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
