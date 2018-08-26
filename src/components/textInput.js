import "../css/textInput.css";

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
        placeholder={this.props.withLabel ? undefined : this.props.placeholder}
        onChange={e => {
          this.valueChanged(e);
        }}
        onKeyUp={e => {
          this.props.onChangeListener && this.props.onChangeListener(e);
        }}
      />
    );
  };

  passwordInput = () => {
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
          this.props.onChangeListener && this.props.onChangeListener(e);
        }}
      />
    );
  };

  errorMessage = () => {
    return (
      <div className="input-field-error-message">{this.props.errorMessage}</div>
    );
  };

  render() {
    return (
      <div className="input-field">
        {this.props.withLabel && (
          <label htmlFor={this.props.id}>{this.props.placeholder}</label>
        )}
        {this.props.password ? this.passwordInput() : this.textInput()}
        {this.props.errorMessage && this.errorMessage()}
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
