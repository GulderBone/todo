import React, { Component } from 'react'
import { Button, FormGroup, FormControl, } from "react-bootstrap";

class Login extends Component {
    constructor(props) {
        super(props);

    this.state = {
        email: "",
        password: ""
      };
    }

  render() {
    return (
        <div style={loginStyle} className="Login">
        <form style={formStyle} onSubmit={this.handleSubmit}>
          <FormGroup controlId="email">
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password">
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    )
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }
}

const loginStyle = {
    padding: '60px 0'
}

const formStyle = {
    margin: '0 auto',
    maxWidth: '320px'
}

export default Login;
