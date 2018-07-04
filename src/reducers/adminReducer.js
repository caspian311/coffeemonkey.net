import initialState from "./initialAdminState";
import * as types from "../actions/actionTypes";

export default function admin(state = initialState, action) {
  switch (action.type) {
    case types.MOVIES_LOADED:
      return {
        ...state,
        movies: action.payload.movies,
        shouldReloadMovies: false,
      };
    case types.NEW_TITLE_CHANGED:
      return {
        ...state,
        newTitle: action.payload.newTitle,
      };
    case types.ADMIN_ERROR:
      return {
        ...state,
        shouldShowError: true,
        errorMessage: action.payload.errorMessage,
      };
    case types.NEW_TITLE_ADDED:
      return {
        ...state,
        shouldReloadMovies: true,
        shouldShowError: false,
        newTitle: "",
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
