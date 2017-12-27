import React, { Component } from 'react';
import MovieList from './movie_list'
import './main.css';

class Main extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="title">Favorite Movies</h3>
        <div className="content">
          <MovieList />
        </div>
      </div>
    );
  }
}

export default Main;
