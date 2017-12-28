import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from './auth';
import './banner.css';

class Banner extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();

    Auth.logout();
    this.props.history.push('/login');
  }

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
          {(!Auth.isAuthenticated() && 
            <li><Link to="/login">Login</Link></li>)}
          {(Auth.isAuthenticated() && 
            <li><a href="#" onClick={this.logout}>Logout</a></li>)}
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    );
  }
}

export default Banner;
