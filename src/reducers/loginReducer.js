import {
  LOGIN,
  BAD_LOGIN,
  LOGOUT,
  PROFILE_SAVED,
} from "../actions/actionTypes";
import initialState from "./initialLoginState";

export default function login(state = initialState, action) {
  switch (action.type) {
    case PROFILE_SAVED:
      return {
        ...state,
        user: action.payload.user,
      };
    case LOGIN:
      return {
        ...state,
        showLoginErrorMessage: false,
        isLoggedIn: true,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case BAD_LOGIN:
      return {
        ...state,
        isLoggedIn: false,
        showLoginErrorMessage: true,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
