import React, { Component } from "react";
import Auth from "../auth";
import Api from "../api";
import { Redirect } from "react-router-dom";

import "../css/admin.css";
import "../css/forms.css";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.populateMovieList();
  }

  populateMovieList() {
    Api.getMovies().then(movies => {
      this.setState(() => {
        return { movies };
      });
    });
  }

  classNameFromIndex(index) {
    return index % 2 === 0 ? "" : "alt";
  }

  deleteMovie(movie) {
    console.log(movie);
  }

  movieList() {
    return (
      <ul>
        {this.state.movies.map((movie, index) => {
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

  render() {
    if (!Auth.isAuthenticated()) {
      return <Redirect to={"/login"} />;
    }

    return (
      <div className="container admin-movie">
        <h3 className="title">Admin</h3>
        <div className="content">
          <form>
            <input type="text" placeholder="Movie title" />
            <input type="button" value="Add" />
          </form>
          {this.movieList()}
        </div>
      </div>
    );
  }
}

export default Admin;
