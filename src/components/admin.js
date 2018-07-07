import "../css/admin.css";
import "../css/forms.css";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React, { Component } from "react";

import Auth from "../auth";
import EditableMovieList from "./editableMovieList";
import * as adminActions from "../actions/adminActions";

class Admin extends Component {
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
    if (!Auth.isAuthenticated()) {
      return <Redirect to={"/login"} />;
    }

    return (
      <div className="container admin-movie">
        <h3 className="title">Admin</h3>
        <div className="content">
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
          <EditableMovieList />
        </div>
      </div>
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
)(Admin);
