import React, { Component } from "react";
import * as auth from "../services/auth";
import { Redirect } from "react-router-dom";

class LogoutButton extends Component {
  constructor(props) {
    super(props);

    this.state = { redirectToLogin: false };
  }

  logout = e => {
    e.preventDefault();

    auth.logout();
    this.setState({
      redirectToLogin: true,
    });
  };

  render() {
    if (this.state.redirectToLogin) {
      return <Redirect to={"/login"} />;
    }

    return (
      <button className="link" onClick={this.logout}>
        Logout
      </button>
    );
  }
}
export default LogoutButton;
