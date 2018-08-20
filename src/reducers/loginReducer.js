import { LOGIN, BAD_LOGIN, LOGOUT } from "../actions/actionTypes";
import initialState from "./initialLoginState";

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        showLoginErrorMessage: false,
        isLoggedIn: true,
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
