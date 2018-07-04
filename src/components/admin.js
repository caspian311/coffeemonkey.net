import { connect } from "react-redux";
import React, { Component } from "react";
import Auth from "../auth";
import * as adminActions from "../actions/adminActions";
import { Redirect } from "react-router-dom";

import "../css/admin.css";
import "../css/forms.css";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      newTitle: "",
    };
  }

  componentDidMount() {
    this.props.populateMovieListDispatch();
  }

  classNameFromIndex(index) {
    return index % 2 === 0 ? "" : "alt";
  }

  deleteMovie(movie) {
    console.log(movie);
  }

  movieList() {
    return (
      <ul>
        {this.props.movies &&
          this.props.movies.map((movie, index) => {
            return (
              <li key={index} className={this.classNameFromIndex(index)}>
                <span>{movie.title}</span>
                <a href="#blah" onClick={() => this.deleteMovie(movie.id)}>
                  X
                </a>
              </li>
            );
          })}
      </ul>
    );
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

    if (this.props.shouldReloadMovies) {
      this.props.populateMovieListDispatch();
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
          {this.movieList()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.admin.movies,
    newTitle: state.admin.newTitle,
    shouldShowError: state.admin.shouldShowError,
    errorMessage: state.admin.errorMessage,
    shouldReloadMovies: state.admin.shouldReloadMovies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    populateMovieListDispatch: () => adminActions.populateMovieList(dispatch),
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
