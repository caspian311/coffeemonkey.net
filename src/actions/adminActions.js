import * as types from "./actionTypes";
import Api from "../api";
import AdminApi from "../admin_api";

export function newTitleChanged(dispatch, newTitle) {
  dispatch({ type: types.NEW_TITLE_CHANGED, payload: { newTitle } });
}

export function addNewTitle(dispatch, newTitle) {
  AdminApi.addMovie(newTitle)
    .catch(response => {
      const errorMessage = "An error occurred while trying to add your title.";
      dispatch({
        type: types.ERROR_ADDING_NEW_TITLE,
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
