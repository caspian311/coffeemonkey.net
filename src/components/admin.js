import "../css/admin.css";

import { Redirect } from "react-router-dom";
import React, { Component } from "react";

import AddMovieForm from "./addMovieForm";
import Auth from "../services/auth";
import EditableMovieList from "./editableMovieList";

class Admin extends Component {
  render() {
    if (!Auth.isAuthenticated()) {
      return <Redirect to={"/login"} />;
    }

    return (
      <div className="container admin-movie">
        <h3 className="title">Admin</h3>
        <div className="content">
          <AddMovieForm />
          <EditableMovieList />
        </div>
      </div>
    );
  }
}

export default Admin;
