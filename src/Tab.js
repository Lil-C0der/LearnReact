import React, { Component } from 'react'
import './Tab.css'

class Tab extends Component {
  constructor(props) {
    super(props)
    this.state = { items: props.items, activeIdx: props.activeIdx }
  }

  onItemClick(index) {
    this.setState({ activeIdx: index }, () => {
      this.props.onTabItemClick(this.state.activeIdx)
    })
    // setTimeout(() => {}, 0)
  }
  render() {
    const { items } = this.state
    const tabItem = items.map((item) => (
      <li
        className={this.props.activeIdx === item ? 'activeItem tabItem' : 'tabItem'}
        key={item}
        onClick={this.onItemClick.bind(this, item)}
      >
        {item}
      </li>
    ))

    return (
      <ul className="tabContainer">
        {tabItem}
        <div>{this.state.activeIdx}</div>
      </ul>
    )
  }
}

export default Tab
