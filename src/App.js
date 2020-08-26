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
import Table from './Table'

import Todo from './Todo/index'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numbers: [1, 2, 3, 4, 5],
      date: [822, 823, 824, 825],
      activeIdx: 822,
      PRODUCTS: [
        { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
        { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
        { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
        { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
        { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
        { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
      ]
    }
    // this.onTabItemClick = this.onTabItemClick.bind(this)
  }
  callback(idx) {
    this.setState({ activeIdx: idx })
    console.log('app', idx)
  }

  render() {
    const { numbers, date, activeIdx, PRODUCTS } = this.state

    const element = (
      <div className="App">
        <Clock />
        {/* <Counter count={5} /> */}
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
        <Table products={PRODUCTS} />
        <Todo />
      </div>
    )

    return element
  }
}

export default App
