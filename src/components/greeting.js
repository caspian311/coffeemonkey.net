import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as auth from "../services/auth";
import UserGreeting from "./user_greeting";

class Greeting extends Component {
  constructor(props) {
    super(props);

    this.state = { history: props.history };
  }

  render() {
    if (auth.isAuthenticated()) {
      return <UserGreeting />;
    }

    return (
      <ul className="actions">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    );
  }
}

export default Greeting;
