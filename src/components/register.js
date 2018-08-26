import "../css/forms.css";
import "../css/register.css";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import React from "react";

import AppPage from "./appPage";
import TextInput from "./textInput";
import * as registerActions from "../actions/registerActions";

class Register extends AppPage {
  componentDidMount() {
    this.props.clearRegisterForm();
  }

  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    this.props.registerDispatch(
      this.props.firstName,
      this.props.lastName,
      this.props.username,
      this.props.password
    );
  };

  cancelRegistration = e => {
    e.preventDefault();
    e.stopPropagation();

    this.props.history.goBack();
  };

  evaluateForm = () => {
    this.props.evaluateForm(
      this.props.firstName,
      this.props.lastName,
      this.props.username,
      this.props.password,
      this.props.showUsernameError
    );
  };

  checkUsername = e => {
    this.props.checkUsername(this.props.username);
  };

  pageContents() {
    if (this.props.isLoggedIn) {
      this.props.history.push("/profile");
    } else if (this.props.shouldRedirectToLogin) {
      this.props.registrationDone();
      this.props.history.push("/login");
    }

    return (
      <div className="container register">
        <h3 className="container-title">Register</h3>
        <div className="content">
          <form onSubmit={this.handleSubmit}>
            <TextInput
              placeholder="First name"
              id="register-firstName"
              value={this.props.firstName}
              onChangeListener={this.evaluateForm}
            />
            <TextInput
              placeholder="Last name"
              id="register-lastName"
              value={this.props.lastName}
              onChangeListener={this.evaluateForm}
            />
            <TextInput
              placeholder="Username"
              id="register-username"
              value={this.props.username}
              onChangeListener={this.checkUsername}
              errorMessage={
                this.props.showUsernameError && "Username is unavailable"
              }
            />
            <TextInput
              placeholder="Password"
              id="register-password"
              value={this.props.password}
              password="true"
              onChangeListener={this.evaluateForm}
            />
            <input
              type="submit"
              value="Register"
              disabled={this.props.canRegister === false}
            />
            <button onClick={this.cancelRegistration}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    firstName: state.textInput["register-firstName"],
    lastName: state.textInput["register-lastName"],
    username: state.textInput["register-username"],
    password: state.textInput["register-password"],
    canRegister: state.register.canRegister,
    showUsernameError: state.register.showUsernameError,
    shouldRedirectToLogin: state.register.shouldRedirectToLogin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    registerDispatch(firstName, lastName, username, password) {
      registerActions.register(
        dispatch,
        firstName,
        lastName,
        username,
        password
      );
    },
    checkUsername(username) {
      registerActions.checkAvailabilityOfUsername(dispatch, username);
    },
    evaluateForm(
      firstName,
      lastName,
      username,
      password,
      showingUsernameError
    ) {
      registerActions.evaluateForm(
        dispatch,
        firstName,
        lastName,
        username,
        password,
        showingUsernameError
      );
    },
    clearRegisterForm() {
      registerActions.clearRegisterForm(dispatch);
    },
    registrationDone() {
      registerActions.done(dispatch);
    },
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register)
);
