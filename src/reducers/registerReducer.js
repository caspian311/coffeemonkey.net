import {
  USERNAME_UNAVAILABLE,
  USERNAME_AVAILABLE,
  REGISTER_FORM_INVALID,
  REGISTER_FORM_VALID,
  REGISTRATION_SUCCESSFUL,
  REGISTRATION_DONE,
} from "../actions/actionTypes";
import initialState from "./initialRegisterState";

export default function register(state = initialState, action) {
  switch (action.type) {
    case USERNAME_AVAILABLE:
      return {
        ...state,
        showUsernameError: false,
      };
    case USERNAME_UNAVAILABLE:
      return {
        ...state,
        showUsernameError: true,
        canRegister: false,
      };
    case REGISTER_FORM_INVALID:
      return {
        ...state,
        canRegister: false,
      };
    case REGISTER_FORM_VALID:
      return {
        ...state,
        canRegister: true,
      };
    case REGISTRATION_SUCCESSFUL:
      return {
        ...state,
        shouldRedirectToLogin: true,
      };
    case REGISTRATION_DONE:
      return {
        ...state,
        shouldRedirectToLogin: false,
      };
    default:
      return state;
  }
}
