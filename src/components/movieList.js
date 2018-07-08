import { connect } from "react-redux";
import React, { Component } from "react";
import * as movieActions from "../actions/movieActions";

function Movie(props) {
  return (
    <li>
      {props.title} - {props.releaseDate}
    </li>
  );
}

class MovieList extends Component {
  render() {
    if (this.props.shouldReloadMovies) {
      this.props.populateMovieListDispatch();
    }

    return (
      <ul>
        {this.props.movies.map((movie, index) => {
          return (
            <Movie
              key={index}
              title={movie.title}
              releaseDate={movie.release_date}
            />
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
    populateMovieListDispatch() {
      movieActions.populateMovieList(dispatch);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
