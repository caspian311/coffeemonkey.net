import React, { Component } from 'react';
import './App.css';
var axios = require('axios');

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
    axios.get('http://localhost:4567/').then(function(response) {
      this.setState(() => {
        let movies = response.data['movies'].map((movie, index) => {
          return (
            <Movie key={index} title={movie.title} releaseDate={movie.release_date} />
          );
        });
        return {
          movies: movies
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
