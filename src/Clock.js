import React, { Component } from 'react'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick()
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
      <div className="clock">
        <h2>{this.state.date.toLocaleTimeString(this.props.locale)}.</h2>
      </div>
    )
  }
}

export default Clock
