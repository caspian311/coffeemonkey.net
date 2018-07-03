import { connect } from "react-redux";
import React, { Component } from "react";
import Auth from "../auth";
import Api from "../api";
import * as adminActions from "../actions/adminActions";
import { Redirect } from "react-router-dom";

import "../css/admin.css";
import "../css/forms.css";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      newTitle: "",
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

  newTitleChanged = e => {
    this.props.newTitleChangeDispatch(e.target.value);
  };

  render() {
    if (!Auth.isAuthenticated()) {
      return <Redirect to={"/login"} />;
    }

    return (
      <div className="container admin-movie">
        <h3 className="title">Admin</h3>
        <div className="content">
          <form>
            <input
              type="text"
              placeholder="Movie title"
              onChange={this.newTitleChanged}
              value={this.props.newTitle}
            />
            <input type="button" value="Add" />
          </form>
          {this.movieList()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    newTitle: state.newTitle,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newTitleChangeDispatch: newTitle =>
      adminActions.newTitleChanged(dispatch, newTitle),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
