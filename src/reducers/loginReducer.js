import initialState from "./initialLoginState";
import { LOGIN, BAD_LOGIN } from "../actions/actionTypes";

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        showLoginErrorMessage: false,
        shouldGoToAdmin: true,
        user: action.payload.user,
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
