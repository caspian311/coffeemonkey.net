import "../css/banner.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React, { Component } from "react";

import Greeting from "./greeting";
import images from "./images";

class Banner extends Component {
  homePath = () => {
    if (this.props.isLoggedIn) {
      return "/admin";
    } else {
      return "/";
    }
  };

  render() {
    return (
      <div className="banner">
        <div className="logo">
          <Link to={this.homePath()}>
            <img src={images.logo} alt="Logo" />
            <h1 className="title">Coffee Monkey!</h1>
          </Link>
        </div>
        <Greeting />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.login.isLoggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Banner);
