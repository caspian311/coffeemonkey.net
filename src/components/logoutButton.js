import React, { Component } from "react";
import * as auth from "../services/auth";

class LogoutButton extends Component {
  logout = e => {
    e.preventDefault();

    auth.logout();
    window.location.href = "/login";
  };

  render() {
    return (
      <button className="link" onClick={this.logout}>
        Logout
      </button>
    );
  }
}
export default LogoutButton;
