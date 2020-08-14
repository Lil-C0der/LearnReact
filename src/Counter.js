import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: this.props.count }

    this.addOne = this.addOne.bind(this)
    this.minusOne = this.minusOne.bind(this)
  }
  addOne() {
    this.setState((state) => {
      return {
        count: state.count++
      }
    })
  }

  minusOne() {
    this.setState((state) => {
      return {
        count: state.count > 0 ? state.count-- : 0
      }
    })
  }
  render() {
    return (
      <div className="counter">
        <div style={{ display: 'inline-block', marginRight: 10 + 'px' }}>{this.state.count}</div>
        {/* <div className='button' onClick={() => { this.addOne() }}>+</div> */}
        <div className="button" onClick={this.addOne}>
          +
        </div>
        <div className="button" onClick={this.minusOne}>
          -
        </div>
      </div>
    )
  }
}

export default Counter
