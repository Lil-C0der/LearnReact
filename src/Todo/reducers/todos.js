const defaultTodos = [{ id: 0, text: 'Test Redux', completed: false }]

const todos = (prevState = defaultTodos, action) => {
  console.log('action', action)
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...prevState,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

    case 'TOGGLE_TODO':
      return prevState.map((todo) => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo))
    default:
      return prevState
  }
}

export default todos
