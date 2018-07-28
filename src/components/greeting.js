import { Link } from "react-router-dom";
import React, { Component } from "react";

import UserGreeting from "./user_greeting";
import * as auth from "../services/auth";

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
    return auth.isAuthenticated()
      ? this.authenticatedUserGreeting()
      : this.unauthenticatedUser();
  }
}

export default Greeting;
