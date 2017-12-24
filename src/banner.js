import React, { Component } from 'react';
import './banner.css'

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="logo">
          <img src="images/coffee_logo.png" alt="Logo" />
          <h1 className="title">Coffee Monkey!</h1>
        </div>
        <ul className="actions">
          <li>Login</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}

export default Banner;
