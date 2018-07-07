import { connect } from "react-redux";
import React, { Component } from "react";

import * as adminActions from "../actions/adminActions";

class EditableMovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.props.populateMovieListDispatch();
  }

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
}

function mapStateToProps(state) {
  return {
    movies: state.admin.movies,
    shouldReloadMovies: state.admin.shouldReloadMovies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    populateMovieListDispatch: () => adminActions.populateMovieList(dispatch),
    deleteMovieDispatch: movieId => adminActions.deleteMovie(dispatch, movieId),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableMovieList);
