import * as types from "./actionTypes";
import Api from "../services/api";
import * as adminApi from "../services/admin_api";

export function newTitleChanged(dispatch, newTitle) {
  dispatch({ type: types.NEW_TITLE_CHANGED, payload: { newTitle } });
}

export function addNewTitle(dispatch, newTitle) {
  adminApi
    .addMovie(newTitle)
    .catch(response => {
      const errorMessage = "An error occurred while trying to add your title.";
      dispatch({
        type: types.ADMIN_ERROR,
        payload: { errorMessage },
      });
    })
    .then(response => {
      if (response === undefined) {
        return;
      }
      dispatch({ type: types.NEW_TITLE_ADDED, payload: { response } });
    });
}

export function populateMovieList(dispatch) {
  Api.getMovies().then(movies => {
    dispatch({ type: types.MOVIES_LOADED, payload: { movies } });
  });
}

export function deleteMovie(dispatch, movieId) {
  adminApi
    .deleteMovie(movieId)
    .catch(response => {
      const errorMessage = "An error occurred while deleting a movie.";
      dispatch({
        type: types.ADMIN_ERROR,
        payload: { errorMessage },
      });
    })
    .then(response => {
      if (response === undefined) {
        return;
      }
      dispatch({ type: types.TITLE_REMOVED });
    });
}
