import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";

import Dropdown from "./dropdown";
import * as auth from "../services/auth";

class UserGreeting extends Component {
  profile = () => {
    this.props.history.push("/profile");
  };

  logout = () => {
    auth.logout();
    this.props.history.push("/login");
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
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserGreeting)
);
