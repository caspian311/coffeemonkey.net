import React, { Component } from 'react';
import Api from './api'

function Movie(props) {
  return (
    <li>{props.title} - {props.releaseDate}</li>
  );
}

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    this.populateMovies();
  }

  populateMovies() {
    Api.getMovies().then(function(movies) {
      this.setState(() => {
        let m = movies.map((movie, index) => {
          return (
            <Movie key={index} title={movie.title} releaseDate={movie.release_date} />
          );
        });

        return {
          movies: m
        };
      });
    }.bind(this));
  }

  render() {
    return (
      <ul>
        {this.state.movies}
      </ul>
    );
  }
}

export default MovieList;
