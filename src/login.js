import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  render() {
    return (
      <div className="main">
        <div className="container">
          <h3 className="title">Login</h3>
          <div className="content">
            <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
