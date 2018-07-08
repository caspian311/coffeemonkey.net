import { connect } from "react-redux";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as auth from "../services/auth";
import LogoutButton from "./logoutButton";

class UserGreeting extends Component {
  render() {
    return (
      <ul className="actions">
        <li>
          Welcome, {this.props.firstName} {this.props.lastName}!
        </li>
        <li>
          <LogoutButton />
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    );
  }
}

function mapStateToProps(state) {
  const user = auth.getUser();

  return {
    firstName: user.firstName,
    lastName: user.lastName,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserGreeting);
