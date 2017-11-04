import React, { Component } from 'react';
import './App.css';
import Api from './api'

function Movie(props) {
  return (
    <li>{props.title} - {props.releaseDate}</li>
  );
}

class App extends Component {
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
      <div>
        <h3>Favorite Movies:</h3>
        <ul>
          {this.state.movies}
        </ul>
      </div>
    );
  }
}

export default App;
