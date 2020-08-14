import React from 'react'
import './App.css'

import Clock from './Clock'
import Counter from './Counter'
import LoginControl from './LoginControl'
import List from './List'
import Form from './Form'
import Tab from './Tab'
import Calc from './Calc'
import FancyBorder from './FancyBorder'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numbers: [1, 2, 3, 4, 5],
      date: [822, 823, 824, 825],
      activeIdx: 822
    }
    // this.onTabItemClick = this.onTabItemClick.bind(this)
  }
  callback(idx) {
    this.setState({ activeIdx: idx })
    console.log('app', idx)
  }
  render() {
    const { numbers, date, activeIdx } = this.state
    const element = (
      <div className="App">
        <Clock />
        <Clock />
        <Clock />
        <Counter count={5} />
        <Counter count={3} />
        <LoginControl />
        <List numbers={numbers} />
        <Form />
        <Tab items={date} activeIdx={activeIdx} onTabItemClick={this.callback.bind(this)} />
        <Calc />
        <FancyBorder color="blue">
          <h1 className="Dialog-title">Welcome</h1>
          <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
        </FancyBorder>
      </div>
    )

    return element
  }
}

export default App
