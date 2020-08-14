import React, { Component } from 'react'

// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }

// ReactDOM.render(
//     // Try changing to isLoggedIn={true}:
//     <Greeting isLoggedIn={false} />,
//     document.getElementById('root')
// );

// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     );
// }

// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     );
// }

class Greeting extends Component {
  render() {
    const { isLoggedIn } = this.props
    if (isLoggedIn) {
      return <h1>Welcome back!</h1>
    }
    return <h1>Please sign up.</h1>
  }
}

class LogoutButton extends Component {
  render() {
    return <button onClick={this.props.onClick}>Logout</button>
  }
}

class LoginButton extends Component {
  render() {
    return <button onClick={this.props.onClick}>Login</button>
  }
}

class LoginControl extends Component {
  constructor(props) {
    super(props)
    this.state = { isLogIn: false }

    this.onLoginClick = this.onLoginClick.bind(this)
    this.onLogoutClick = this.onLogoutClick.bind(this)
  }

  onLoginClick() {
    this.setState({ isLogIn: true })
  }
  onLogoutClick() {
    this.setState({ isLogIn: false })
  }

  render() {
    const { isLogIn } = this.state

    return (
      <div>
        <Greeting isLoggedIn={isLogIn}></Greeting>
        {isLogIn ? <LogoutButton onClick={this.onLogoutClick} /> : <LoginButton onClick={this.onLoginClick} />}
      </div>
    )
  }
}

export default LoginControl
