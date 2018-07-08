import { connect } from "react-redux";
import React, { Component } from "react";

import * as adminActions from "../actions/adminActions";
import * as movieActions from "../actions/movieActions";

class EditableMovieList extends Component {
  classNameFromIndex(index) {
    return index % 2 === 0 ? "" : "alt";
  }

  deleteMovie = movie => {
    this.props.deleteMovieDispatch(movie);
  };

  render() {
    if (this.props.shouldReloadMovies) {
      this.props.populateMovieListDispatch();
    }

    return (
      <ul>
        {this.props.movies &&
          this.props.movies.map((movie, index) => {
            return (
              <li key={index} className={this.classNameFromIndex(index)}>
                <span>
                  {movie.title} ({movie.release_date})
                </span>
                <a href="#blah" onClick={() => this.deleteMovie(movie.id)}>
                  X
                </a>
              </li>
            );
          })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movie.movies,
    shouldReloadMovies: state.movie.shouldReloadMovies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    populateMovieListDispatch: () => movieActions.populateMovieList(dispatch),
    deleteMovieDispatch: movieId => adminActions.deleteMovie(dispatch, movieId),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableMovieList);
