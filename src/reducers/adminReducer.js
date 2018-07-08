import initialState from "./initialAdminState";
import * as types from "../actions/actionTypes";

export default function admin(state = initialState, action) {
  switch (action.type) {
    case types.NEW_TITLE_CHANGED:
      return {
        ...state,
        newTitle: action.payload.newTitle,
      };
    case types.NEW_YEAR_CHANGED:
      return {
        ...state,
        newYear: action.payload.newYear,
      };
    case types.ADMIN_ERROR:
      return {
        ...state,
        shouldShowError: true,
        errorMessage: action.payload.errorMessage,
      };
    case types.NEW_MOVIE_ADDED:
      return {
        ...state,
        shouldShowError: false,
        newTitle: "",
        newYear: "",
      };
    default:
      return state;
  }
}
