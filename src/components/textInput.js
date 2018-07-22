import { connect } from "react-redux";
import React, { Component } from "react";

import * as inputActions from "../actions/inputActions";

class TextInput extends Component {
  valueChanged = e => {
    this.props.valueChanged(e.target.id, e.target.value);
  };

  textInput = () => {
    return (
      <input
        id={this.props.id}
        type="text"
        value={this.props.value || ""}
        placeholder={this.props.placeholder}
        onChange={this.valueChanged}
      />
    );
  };

  passwordInput = () => {
    return (
      <input
        id={this.props.id}
        type="password"
        value={this.props.value || ""}
        placeholder={this.props.placeholder}
        onChange={this.valueChanged}
      />
    );
  };

  render() {
    return this.props.password ? this.passwordInput() : this.textInput();
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    valueChanged(id, newValue) {
      inputActions.valueChanged(dispatch, id, newValue);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInput);
