import { LOGIN, BAD_LOGIN, LOGIN_SUCCESS } from "../actions/actionTypes";
import initialState from "./initialLoginState";

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        showLoginErrorMessage: false,
        shouldGoToAdmin: true,
        user: action.payload.user,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        shouldGoToAdmin: false,
      };
    case BAD_LOGIN:
      return {
        ...state,
        showLoginErrorMessage: true,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
