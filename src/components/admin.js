import "../css/admin.css";

import { Redirect } from "react-router-dom";
import React from "react";

import AddMovieForm from "./addMovieForm";
import AppPage from "./appPage";
import EditableMovieList from "./editableMovieList";
import * as auth from "../services/auth";

class Admin extends AppPage {
  pageContents() {
    if (!auth.isAuthenticated()) {
      return <Redirect to={"/login"} />;
    }

    return (
      <div className="container admin-movie">
        <h3 className="container-title">Admin</h3>
        <div className="content">
          <AddMovieForm />
          <EditableMovieList />
        </div>
      </div>
    );
  }
}

export default Admin;
