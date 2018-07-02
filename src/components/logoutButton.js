import React, { Component } from "react";
import Auth from "../auth";
import { Redirect } from "react-router-dom";

class LogoutButton extends Component {
  constructor(props) {
    super(props);

    this.state = { redirectToLogin: false };
  }

  logout = e => {
    e.preventDefault();

    Auth.logout();
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
