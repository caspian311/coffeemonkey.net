import "../css/textInput.css";

import { connect } from "react-redux";
import React, { Component } from "react";

import * as inputActions from "../actions/inputActions";

class TextInput extends Component {
  valueChanged = e => {
    this.props.valueChanged(e.target.id, e.target.value);
  };

  textInput = onChangeListener => {
    return (
      <input
        id={this.props.id}
        type="text"
        value={this.props.value || ""}
        placeholder={this.props.withLabel ? undefined : this.props.placeholder}
        onChange={e => {
          this.valueChanged(e);
        }}
        onKeyUp={e => {
          onChangeListener && onChangeListener(e);
        }}
      />
    );
  };

  passwordInput = onChangeListener => {
    return (
      <input
        id={this.props.id}
        type="password"
        value={this.props.value || ""}
        placeholder={this.props.withLabel ? undefined : this.props.placeholder}
        onChange={e => {
          this.valueChanged(e);
        }}
        onKeyUp={e => {
          onChangeListener && onChangeListener(e);
        }}
      />
    );
  };

  render() {
    const { onChangeListener } = this.props;
    return (
      <div>
        {this.props.withLabel && (
          <label htmlFor={this.props.id}>{this.props.placeholder}</label>
        )}
        {this.props.password
          ? this.passwordInput(onChangeListener)
          : this.textInput(onChangeListener)}
      </div>
    );
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
