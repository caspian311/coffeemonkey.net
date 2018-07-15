import "../css/forms.css";
import "../css/login.css";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

import AppPage from "./appPage";
import LoginErrorMessage from "./loginErrorMessage";
import * as loginActions from "../actions/loginActions";

class Login extends AppPage {
  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    this.props.loginDispatch(this.props.username, this.props.password);
  };

  usernameChanged = e => {
    this.props.usernameChangedDispatch(e.target.value);
  };

  passwordChanged = e => {
    this.props.passwordChangedDispatch(e.target.value);
  };

  pageContents() {
    if (this.props.shouldGoToAdmin) {
      return <Redirect to={"/admin"} />;
    }

    return (
      <div className="container login">
        <h3 className="container-title">Login</h3>
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
    shouldGoToAdmin: state.login.shouldGoToAdmin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginDispatch: (username, password) =>
      loginActions.login(dispatch, username, password),
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
