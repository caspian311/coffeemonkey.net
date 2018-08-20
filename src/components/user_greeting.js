import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";

import Dropdown from "./dropdown";
import * as auth from "../services/auth";
import * as loginActions from "../actions/loginActions";

class UserGreeting extends Component {
  profile = () => {
    this.props.history.push("/profile");
  };

  logout = () => {
    this.props.logoutDispatch();
  };

  render() {
    const title = `Welcome, ${this.props.firstName} ${this.props.lastName}!`;
    const list = [
      { title: "Profile", action: this.profile },
      { title: "Logout", action: this.logout },
    ];
    return <Dropdown title={title} list={list} />;
  }
}

function mapStateToProps(state) {
  const user = auth.getUser();

  return {
    firstName: user.firstName,
    lastName: user.lastName,
    isLoggedIn: state.login.isLoggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logoutDispatch: () => loginActions.logout(dispatch),
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserGreeting)
);
