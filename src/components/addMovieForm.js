import "../css/forms.css";

import { connect } from "react-redux";
import React, { Component } from "react";

import * as adminActions from "../actions/adminActions";

class AddMovieForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTitle: "",
    };
  }

  newTitleChanged = e => {
    this.props.newTitleChangeDispatch(e.target.value);
  };

  addTitleClick = e => {
    this.props.addNewTitleDispatch(this.props.newTitle);
  };

  errorMessage() {
    return (
      this.props.shouldShowError && (
        <div className="error">{this.props.errorMessage}</div>
      )
    );
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Movie title"
          onChange={this.newTitleChanged}
          value={this.props.newTitle}
        />
        <input type="button" value="Add" onClick={this.addTitleClick} />
        {this.errorMessage()}
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    newTitle: state.admin.newTitle,
    shouldShowError: state.admin.shouldShowError,
    errorMessage: state.admin.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newTitleChangeDispatch: newTitle =>
      adminActions.newTitleChanged(dispatch, newTitle),
    addNewTitleDispatch: newTitle =>
      adminActions.addNewTitle(dispatch, newTitle),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMovieForm);
