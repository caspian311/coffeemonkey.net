import React, { Component } from 'react';
import './login.css';
import LoginService from './login_service';

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: '',
      username: '',
      password: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);
    LoginService.login(data).then(() => {
      console.log('Login succeeded!');
    }).catch(() => {
      this.setState({
        error: 'Incorrect username or password.', 
        username: this.state.username, 
        password: this.state.password, 
      });
    });
  }

  render() {
    return (
      <div className="main">
        <div className="container">
          <h3 className="title">Login</h3>
          <div className="content">
            {this.state.error &&
              <h3>{this.state.error}</h3>
            }
            <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Username" name="username" id="username" />
            <input type="password" placeholder="Password" name="password" id="password" />
            <input type="submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
