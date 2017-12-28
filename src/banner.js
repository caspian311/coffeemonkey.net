import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Greeting from './greeting';
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
        <Greeting history={this.props.history} />
      </div>
    );
  }
}

export default Banner;
