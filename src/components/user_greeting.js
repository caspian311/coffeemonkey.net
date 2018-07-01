import { connect } from "react-redux";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Auth from "../auth";

class UserGreeting extends Component {
  componentDidMount() {
    this.setState(Auth.getUser());
  }

  logout = e => {
    e.preventDefault();

    Auth.logout();
    this.props.history.push("/login");
  };

  render() {
    return (
      <ul className="actions">
        <li>
          Welcome, {this.props.firstName} {this.props.lastName}!
        </li>
        <li>
          <button className="link" onClick={this.logout}>
            Logout
          </button>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    );
  }
}

function mapStateToProps(state) {
  if (state.login.user) {
    return {
      firstName: state.login.user.firstName,
      lastName: state.login.user.lastName,
    };
  }

  const user = Auth.getUser();

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
