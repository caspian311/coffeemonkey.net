import { connect } from "react-redux";
import React, { Component } from "react";

import * as movieManagementActions from "../actions/movieManagementActions";
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
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td />
          </tr>
        </thead>
        <tbody>
          {this.props.movies &&
            this.props.movies.map((movie, index) => {
              return (
                <tr key={index} className={this.classNameFromIndex(index)}>
                  <td>
                    {movie.title} ({movie.releaseDate})
                  </td>
                  <td>
                    <button onClick={() => this.deleteMovie(movie.id)}>
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
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
    populateMovieListDispatch() {
      movieActions.populateMovieList(dispatch);
    },
    deleteMovieDispatch(movieId) {
      movieManagementActions.deleteMovie(dispatch, movieId);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableMovieList);
