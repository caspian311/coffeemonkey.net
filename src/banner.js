import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './banner.css';

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="logo">
          <Link to="/">
            <img src="images/coffee_logo.png" alt="Logo" />
            <h1 className="title">Coffee Monkey!</h1>
          </Link>
        </div>
        <ul className="actions">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    );
  }
}

export default Banner;
