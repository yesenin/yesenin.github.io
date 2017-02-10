const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_FOLDER':
      return {
        id: action.id,
        text: action.text,
        children: []
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return {
          ...state,
        }
      }
      return {
        ...state,
      }
    default:
      return state
  }
}

const initialState = {
  items: [
    {
      id: 0,
      text: "Ett",
      children: [
        {id: 2,
          text: "Tva",
        children: []}
      ]
    },
    {
      id: 1,
      text: "Tre",
      children: []
    }
  ],
  selectedId: 2,
  lastIndex: 2
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FOLDER':
      return { items: [
        ...state.items.map((i) => ({
          id: i.id,
          text: i.text,
          children: i.children
        })),
        todo(undefined, action)
      ], selectedId: action.id}
    case 'TOGGLE_TODO':
      console.log(action)
      return {
        items: state.items,
        selectedId: action.id}
    default:
      return state
  }
}

export default todos
