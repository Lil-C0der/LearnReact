import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed === true)

    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((todo) => todo.completed === false)

    case VisibilityFilters.SHOW_ALL:
      return todos
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({ todos: getVisibleTodos(state.todos, state.visibilityFilter) })

const mapDispatchToProps = (dispatch) => ({
  // toggleTodo: (id) => {
  //   console.log(id)
  //   return dispatch(toggleTodo(id))
  // }
  toggleTodo: bindActionCreators(toggleTodo, dispatch)
})

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList
