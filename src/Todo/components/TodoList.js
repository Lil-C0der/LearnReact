import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
  render() {
    const { todos, toggleTodo } = this.props

    return (
      <ul style={{ padding: '0' }}>
        {/* {JSON.stringify(todos)} */}
        {todos.map((todo) => (
          // toggleClick 由 container/VisibleTodoList 注入
          <TodoItem key={todo.id} {...todo} onClick={toggleTodo.bind(undefined, todo.id)} />
        ))}
      </ul>
    )
  }
}

export default TodoList
