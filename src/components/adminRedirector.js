import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";

class AdminRedirector extends Component {
  render() {
    if (!this.props.isLoggedIn) {
      this.props.history.push("/login");
    }
    return <span />;
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.login.isLoggedIn,
  };
}

export default withRouter(connect(mapStateToProps)(AdminRedirector));
