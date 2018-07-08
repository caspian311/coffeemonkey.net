import * as types from "./actionTypes";
import * as adminApi from "../services/admin_api";

export function newTitleChanged(dispatch, newTitle) {
  dispatch({ type: types.NEW_TITLE_CHANGED, payload: { newTitle } });
}

export function newYearChanged(dispatch, newYear) {
  dispatch({ type: types.NEW_YEAR_CHANGED, payload: { newYear } });
}

export function addNewMovie(dispatch, title, year) {
  adminApi
    .addMovie(title, year)
    .catch(response => {
      const errorMessage = "An error occurred while trying to add your movie.";
      dispatch({
        type: types.ADMIN_ERROR,
        payload: { errorMessage },
      });
    })
    .then(response => {
      if (response === undefined) {
        return;
      }
      dispatch({ type: types.NEW_MOVIE_ADDED, payload: { response } });
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
