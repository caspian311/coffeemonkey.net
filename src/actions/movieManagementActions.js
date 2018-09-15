import * as types from "./actionTypes";
import * as movieService from "../services/movieService";

export function newTitleChanged(dispatch, newTitle) {
  dispatch({ type: types.NEW_TITLE_CHANGED, payload: { newTitle } });
}

export function newYearChanged(dispatch, newYear) {
  dispatch({ type: types.NEW_YEAR_CHANGED, payload: { newYear } });
}

export async function addNewMovie(dispatch, title, year) {
  try {
    const response = await movieService.addMovie(title, year);
    if (response === undefined) {
      return;
    }
    dispatch({ type: types.NEW_MOVIE_ADDED, payload: { response } });
  } catch (response) {
    const errorMessage = "An error occurred while trying to add your movie.";
    dispatch({
      type: types.ADMIN_ERROR,
      payload: { errorMessage },
    });
  }
}

export async function deleteMovie(dispatch, movieId) {
  try {
    const response = await movieService.deleteMovie(movieId);
    if (response === undefined) {
      return;
    }
    dispatch({ type: types.TITLE_REMOVED });
  } catch (e) {
    const errorMessage = "An error occurred while deleting a movie.";
    dispatch({
      type: types.ADMIN_ERROR,
      payload: { errorMessage },
    });
  }
}
