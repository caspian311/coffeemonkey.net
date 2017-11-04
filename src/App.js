import React, { Component } from 'react';
import MovieList from './movie_list'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h3>Favorite Movies:</h3>
        <MovieList />
      </div>
    );
  }
}

export default App;
