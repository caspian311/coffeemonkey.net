import { LOGIN, LOGOUT, PROFILE_SAVED } from "../actions/actionTypes";
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
        isLoggedIn: true,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
