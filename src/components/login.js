import "../css/forms.css";
import "../css/login.css";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

import AppPage from "./appPage";
import LoginErrorMessage from "./loginErrorMessage";
import TextInput from "./textInput";
import * as loginActions from "../actions/loginActions";

class Login extends AppPage {
  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    this.props.loginDispatch(this.props.username, this.props.password);
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
            <TextInput
              placeholder="Username"
              id="login-username"
              value={this.props.username}
            />
            <TextInput
              placeholder="Password"
              id="login-password"
              value={this.props.password}
              password="true"
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
    username: state.textInput["login-username"],
    password: state.textInput["login-password"],
    showLoginErrorMessage: state.login.showLoginErrorMessage,
    errorMessage: state.login.errorMessage,
    shouldGoToAdmin: state.login.shouldGoToAdmin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginDispatch: (username, password) =>
      loginActions.login(dispatch, username, password),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
