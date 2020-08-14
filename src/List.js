import React, { Component } from 'react'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = { numbers: props.numbers }

    this.addItem = this.addItem.bind(this)
  }

  addItem() {
    let { numbers } = this.state
    const firstItem = numbers[0]
    numbers = [firstItem - 1, ...numbers]
    this.setState({ numbers })
  }

  render() {
    return (
      <ul className="list">
        <button onClick={this.addItem}>ADD</button>
        {this.state.numbers.map((n) => (
          <li key={n}>
            {n}
            <input></input>
          </li>
        ))}
      </ul>
    )
  }
}

export default List
