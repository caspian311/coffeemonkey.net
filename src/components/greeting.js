import "../css/greeting.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React, { Component } from "react";

import UserGreeting from "./userGreeting";

class Greeting extends Component {
  authenticatedUserGreeting = () => {
    return <UserGreeting />;
  };

  unauthenticatedUser = () => {
    return (
      <ul className="actions">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    );
  };

  render() {
    return (
      <div className="greeting">
        {this.props.isLoggedIn
          ? this.authenticatedUserGreeting()
          : this.unauthenticatedUser()}
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
)(Greeting);
