import React, { Component } from 'react'

class BoilingVerdict extends Component {
  render() {
    return this.props.celsius >= 100 ? <p>The water would boil.</p> : <p>The water would not boil.</p>
  }
}

class TemperatureIpt extends Component {
  onChange(e) {
    this.props.onTemperatureChange(e.target.value)
  }

  render() {
    const scaleNames = {
      c: 'Celsius',
      f: 'Fahrenheit'
    }
    const scaleName = scaleNames[this.props.scale]
    const temperature = this.props.temperature

    return (
      <fieldset>
        <legend>Enter temperature in {scaleName}:</legend>
        <input onChange={this.onChange.bind(this)} value={temperature}></input>
      </fieldset>
    )
  }
}

class Calc extends Component {
  constructor(props) {
    super(props)
    this.state = { temperature: '0', scale: 'c' }
  }

  toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9
  }

  toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32
  }

  tryConvert(input, fn) {
    const temperature = +input
    let result
    if (typeof temperature === 'number' && !isNaN(temperature)) {
      result = fn(temperature)
    }
    return result
  }

  onFahrenheitChange(input) {
    this.setState({ temperature: input, scale: 'f' })
  }
  onCelsiusChange(input) {
    this.setState({ temperature: input, scale: 'c' })
  }
  render() {
    const { temperature } = this.state
    const celsius = this.state.scale === 'c' ? temperature : this.tryConvert(temperature, this.toCelsius)
    const fahrenheit = this.state.scale === 'f' ? temperature : this.tryConvert(temperature, this.toFahrenheit)

    return (
      <div>
        <TemperatureIpt temperature={celsius} onTemperatureChange={this.onCelsiusChange.bind(this)} scale="c" />
        <TemperatureIpt temperature={fahrenheit} onTemperatureChange={this.onFahrenheitChange.bind(this)} scale="f" />
        <BoilingVerdict celsius={celsius} />
      </div>
    )
  }
}

export default Calc
