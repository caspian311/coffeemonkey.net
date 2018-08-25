import "../css/forms.css";
import "../css/register.css";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import React from "react";

import AppPage from "./appPage";
import TextInput from "./textInput";
import * as registerActions from "../actions/registerActions";

class Register extends AppPage {
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

  pageContents() {
    if (this.props.isLoggedIn) {
      this.props.history.push("/profile");
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
            />
            <TextInput
              placeholder="Last name"
              id="register-lastName"
              value={this.props.lastName}
            />
            <TextInput
              placeholder="Username"
              id="register-username"
              value={this.props.username}
              onChangeListener={this.checkUsername}
            />
            <TextInput
              placeholder="Password"
              id="register-password"
              value={this.props.password}
              password="true"
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

  checkUsername = e => {
    this.props.checkUsername(this.props.username);
  };
}

function mapStateToProps(state) {
  return {
    firstName: state.textInput["register-firstName"],
    lastName: state.textInput["register-lastName"],
    username: state.textInput["register-username"],
    password: state.textInput["register-password"],
    canRegister: state.register.canRegister,
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
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register)
);
