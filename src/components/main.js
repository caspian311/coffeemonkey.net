import React, { Component } from "react";
import MovieList from "./movieList";
import "../css/main.css";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="container-title">Favorite Movies</h3>
        <div className="content">
          <MovieList />
        </div>
      </div>
    );
  }
}

export default Main;
