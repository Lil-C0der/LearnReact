import React, { Component } from 'react'
import './Tab.css'

class Tab extends Component {
  onItemClick(index) {
    this.props.onTabItemClick(index)
  }

  render() {
    const { items, activeIdx } = this.props
    const tabItem = items.map((item) => (
      <li
        className={activeIdx === item ? 'activeItem tabItem' : 'tabItem'}
        key={item}
        onClick={this.onItemClick.bind(this, item)}
      >
        {item}
      </li>
    ))

    return (
      <ul className="tabContainer">
        {tabItem}
        <div>{this.props.activeIdx}</div>
      </ul>
    )
  }
}

export default Tab
