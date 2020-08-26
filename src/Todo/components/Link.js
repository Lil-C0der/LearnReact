import React, { Component } from 'react'

class Link extends Component {
  render() {
    const { active, children, onClick, filter } = this.props
    return (
      <button
        onClick={onClick.bind(undefined, filter)}
        disabled={active}
        style={{
          marginLeft: '4px'
        }}
      >
        {children}
      </button>
    )
  }
}

export default Link
