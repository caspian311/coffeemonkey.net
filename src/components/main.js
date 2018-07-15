import "../css/main.css";

import React from "react";

import AppPage from "./appPage";
import MovieList from "./movieList";

class Main extends AppPage {
  pageContents() {
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
