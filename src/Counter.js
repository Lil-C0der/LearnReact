import React, { Component, useState, useEffect } from 'react'

// class Counter extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { count: this.props.count }

//     this.addOne = this.addOne.bind(this)
//     this.minusOne = this.minusOne.bind(this)
//   }
//   componentDidMount() {
//     document.title = `You clicked ${this.state.count} times`
//   }
//   componentDidUpdate() {
//     document.title = `You clicked ${this.state.count} times`
//   }
//   componentWillUnmount() {
//     console.log('unMount')
//   }

//   addOne() {
//     this.setState((state) => {
//       return {
//         count: state.count++
//       }
//     })
//   }

//   minusOne() {
//     this.setState((state) => {
//       return {
//         count: state.count > 0 ? state.count-- : 0
//       }
//     })
//   }
//   render() {
//     return (
//       <div className="counter">
//         <div style={{ display: 'inline-block', marginRight: 10 + 'px' }}>{this.state.count}</div>
//         <div className="button" onClick={this.addOne}>
//           +
//         </div>
//         <div className="button" onClick={this.minusOne}>
//           -
//         </div>
//       </div>
//     )
//   }
// }

function Counter(props) {
  const [count, setCount] = useState(props.count)

  useEffect(() => {
    document.title = `You clicked ${count} times`
    console.log(`count turn to ${count}`)
  }, [count])

  return (
    <div className="counter">
      <div style={{ display: 'inline-block', marginRight: 10 + 'px' }}>{count}</div>
      <div className="button" onClick={() => setCount(count + 1)}>
        +
      </div>
      <div className="button" onClick={() => setCount(count - 1)}>
        -
      </div>
    </div>
  )
}

export default Counter
