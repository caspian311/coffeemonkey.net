import "../css/admin.css";

import React from "react";

import AddMovieForm from "./addMovieForm";
import AdminPage from "./adminPage";
import EditableMovieList from "./editableMovieList";

class Admin extends AdminPage {
  adminContents() {
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
