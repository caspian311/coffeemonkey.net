import initialState from "./initialLoginState";
import {
  LOGIN,
  BAD_LOGIN,
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
} from "../actions/actionTypes";

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      console.log("submit login");

      return {
        ...state,
        showLoginErrorMessage: false,
        user: action.payload.user,
      };
    case BAD_LOGIN:
      console.log("login failed");
      return {
        ...state,
        showLoginErrorMessage: true,
        errorMessage: action.payload.errorMessage,
      };
    case USERNAME_CHANGED:
      return {
        ...state,
        username: action.payload.username,
      };
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload.password,
      };
    default:
      return state;
  }
}