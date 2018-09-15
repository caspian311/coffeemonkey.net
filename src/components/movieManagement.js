import "../css/admin.css";

import { connect } from "react-redux";
import React from "react";

import AddMovieForm from "./addMovieForm";
import AdminPage from "./adminPage";
import EditableMovieList from "./editableMovieList";
import MovieList from "./movieList";

class MovieManagement extends AdminPage {
  adminView = () => {
    return (
      <div className="content">
        <AddMovieForm />
        <EditableMovieList />
      </div>
    );
  };

  nonAdminView = () => {
    return (
      <div className="content">
        <MovieList />
      </div>
    );
  };

  containerClasses = () => {
    return `container ${this.props.isLoggedIn ? "admin-movie" : ""}`;
  };

  adminContents() {
    return (
      <div className={this.containerClasses()}>
        <h3 className="container-title">Admin</h3>
        <div className="content">
          {this.props.isLoggedIn ? this.adminView() : this.nonAdminView()}
        </div>
      </div>
    );
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieManagement);
