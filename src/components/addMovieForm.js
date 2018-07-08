import "../css/forms.css";

import { connect } from "react-redux";
import React, { Component } from "react";

import * as adminActions from "../actions/adminActions";

class AddMovieForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTitle: "",
      newYear: "",
    };
  }

  newTitleChanged = e => {
    this.props.newTitleChangeDispatch(e.target.value);
  };
  newYearChanged = e => {
    this.props.newYearChangeDispatch(e.target.value);
  };

  addMovieClick = e => {
    this.props.addNewMovieDispatch(this.props.newTitle, this.props.newYear);
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
          className="title"
          onChange={this.newTitleChanged}
          value={this.props.newTitle}
        />
        <input
          type="text"
          placeholder="Release year"
          className="year"
          onChange={this.newYearChanged}
          value={this.props.newYear}
        />
        <input type="button" value="Add" onClick={this.addMovieClick} />
        {this.errorMessage()}
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    newTitle: state.admin.newTitle,
    newYear: state.admin.newYear,
    shouldShowError: state.admin.shouldShowError,
    errorMessage: state.admin.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newTitleChangeDispatch(newTitle) {
      adminActions.newTitleChanged(dispatch, newTitle);
    },
    newYearChangeDispatch(newYear) {
      adminActions.newYearChanged(dispatch, newYear);
    },
    addNewMovieDispatch(newTitle, newYear) {
      adminActions.addNewMovie(dispatch, newTitle, newYear);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMovieForm);
