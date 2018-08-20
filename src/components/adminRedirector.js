import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";

class AdminRedirector extends Component {
  render() {
    if (!this.props.isLoggedIn) {
      console.log("user is no longer logged in");
      this.props.history.push("/login");
    } else {
      console.log("user is still logged in");
    }
    return <div />;
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.login.isLoggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AdminRedirector)
);
