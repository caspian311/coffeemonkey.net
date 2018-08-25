import {
  USERNAME_UNAVAILABLE,
  USERNAME_AVAILABLE,
} from "../actions/actionTypes";
import initialState from "./initialRegisterState";

export default function register(state = initialState, action) {
  switch (action.type) {
    case USERNAME_AVAILABLE:
      return {
        ...state,
        canRegister: true,
      };
    case USERNAME_UNAVAILABLE:
      return {
        ...state,
        canRegister: false,
      };
    default:
      return state;
  }
}
