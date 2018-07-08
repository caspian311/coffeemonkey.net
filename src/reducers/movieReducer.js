import initialState from "./initialMovieState";
import * as types from "../actions/actionTypes";

export default function admin(state = initialState, action) {
  switch (action.type) {
    case types.MOVIES_LOADED:
      return {
        ...state,
        movies: action.payload.movies,
        shouldReloadMovies: false,
      };
    case types.NEW_MOVIE_ADDED:
      return {
        ...state,
        shouldReloadMovies: true,
      };
    case types.TITLE_REMOVED:
      return {
        ...state,
        shouldReloadMovies: true,
      };
    default:
      return state;
  }
}
