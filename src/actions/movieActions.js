import * as types from "./actionTypes";
import * as api from "../services/api";

export function populateMovieList(dispatch) {
  api.getMovies().then(movies => {
    dispatch({ type: types.MOVIES_LOADED, payload: { movies } });
  });
}
