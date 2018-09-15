import * as types from "./actionTypes";
import * as api from "../services/api";

export async function populateMovieList(dispatch) {
  const movies = await api.getMovies();
  dispatch({ type: types.MOVIES_LOADED, payload: { movies } });
}
