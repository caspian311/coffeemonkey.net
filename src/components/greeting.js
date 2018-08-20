import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React, { Component } from "react";

import UserGreeting from "./user_greeting";

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
      </ul>
    );
  };

  render() {
    return this.props.isLoggedIn
      ? this.authenticatedUserGreeting()
      : this.unauthenticatedUser();
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
