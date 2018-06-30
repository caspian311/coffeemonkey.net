import { connect } from "react-redux";
import React, { Component } from "react";
import "../css/login.css";
import * as loginActions from "../actions/loginActions";
import LoginErrorMessage from "./loginErrorMessage";

class Login extends Component {
  goToAdmin = () => {
    this.props.history.push("/admin");
  };

  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    this.props.loginDispatch(
      this.props.username,
      this.props.password,
      this.goToAdmin
    );
  };

  usernameChanged = e => {
    this.props.usernameChangedDispatch(e.target.value);
  };

  passwordChanged = e => {
    this.props.passwordChangedDispatch(e.target.value);
  };

  render() {
    return (
      <div className="container">
        <h3 className="title">Login</h3>
        <div className="content">
          <LoginErrorMessage
            shouldShow={this.props.showLoginErrorMessage}
            message={this.props.errorMessage}
          />
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              id="username"
              value={this.props.username}
              onChange={this.usernameChanged}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              value={this.props.password}
              onChange={this.passwordChanged}
            />
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.login.username,
    password: state.login.password,
    showLoginErrorMessage: state.login.showLoginErrorMessage,
    errorMessage: state.login.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginDispatch: (username, password, goToAdmin) =>
      loginActions.login(dispatch, username, password, goToAdmin),
    usernameChangedDispatch: username =>
      loginActions.usernameChanged(dispatch, username),
    passwordChangedDispatch: password =>
      loginActions.passwordChanged(dispatch, password),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
