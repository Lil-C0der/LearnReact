import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index'

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.input = null
  }

  onSubmit(e) {
    let { input } = this
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    this.props.dispatch(addTodo(input.value))
    input.value = ''
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            ref={(node) => {
              this.input = node
            }}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }
}

AddTodo = connect()(AddTodo)

export default AddTodo
