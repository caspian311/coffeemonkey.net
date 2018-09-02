import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";

import Dropdown from "./dropdown";
import * as loginActions from "../actions/loginActions";

class UserGreeting extends Component {
  profile = () => {
    this.props.history.push("/profile");
  };

  logout = () => {
    this.props.logoutDispatch();
  };

  componentDidMount() {
    if (this.props.user === undefined) {
      this.props.populateUserToState();
    }
  }

  render() {
    const greeting = `Welcome, ${this.props.user.firstName} ${
      this.props.user.lastName
    }!`;
    const list = [
      { title: "Profile", action: this.profile },
      { title: "Logout", action: this.logout },
    ];
    return <Dropdown title={greeting} list={list} />;
  }
}

function mapStateToProps(state) {
  return {
    user: state.login.user,
    isLoggedIn: state.login.isLoggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logoutDispatch() {
      loginActions.logout(dispatch);
    },
    populateUserToState() {
      loginActions.populateUserToState(dispatch);
    },
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserGreeting)
);
