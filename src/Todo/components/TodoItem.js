import React, { Component } from 'react'

class TodoItem extends Component {
  render() {
    const { onClick, completed, text, id } = this.props

    const itemStyle = {
      listStyle: 'none',
      textDecoration: completed ? 'line-through' : 'none',
      borderBottom: '1px solid #000',
      padding: '0px 4px 4px',
      maxWidth: '160px'
    }

    const idStyle = {
      display: 'inline-block',
      width: '24px',
      height: '24px',
      textAlign: 'center',
      lineHeight: '24px',
      marginRight: '10px',
      backgroundColor: '#eee',
      borderRadius: '50%'
    }

    return (
      <li onClick={onClick} style={itemStyle}>
        <span style={idStyle}>{id}</span>
        <span>{text}</span>
      </li>
    )
  }
}

export default TodoItem
