import React, { Component } from "react";
import { Link } from "react-router-dom";

import Auth from "../auth";
import Greeting from "./greeting";

import "./banner.css";

class Banner extends Component {
  constructor(props) {
    super(props);

    this.homePath = this.homePath.bind(this);
  }

  homePath() {
    if (Auth.isAuthenticated()) {
      return "/admin";
    } else {
      return "/";
    }
  }

  render() {
    return (
      <div className="banner">
        <div className="logo">
          <Link to={this.homePath()}>
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
