import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { value: 'input', selectVal: 'coconut' }

    this.onSubmit = this.onSubmit.bind(this)
    this.onIptChange = this.onIptChange.bind(this)
    this.onSelectChange = this.onSelectChange.bind(this)
  }
  onIptChange(e) {
    this.setState({ value: e.target.value })
  }
  onSelectChange(e) {
    this.setState({ selectVal: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const { value, selectVal } = this.state
    console.log(value, selectVal)
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          名字:
          <input type="text" value={this.state.value} onChange={this.onIptChange} />
        </label>
        <select value={this.state.selectVal} onChange={this.onSelectChange}>
          <option value="lime">酸橙</option>
          <option value="mango">芒果</option>
          <option value="coconut">椰子</option>
        </select>
        <input type="submit" value="提交" />
      </form>
    )
  }
}

export default Form
