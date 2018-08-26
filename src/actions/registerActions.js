import * as types from "./actionTypes";
import * as registerService from "../services/registerService";
import * as notificationActions from "./notificationActions";

export function register(dispatch, firstName, lastName, username, password) {
  dispatch({ type: types.REGISTER_FORM_INVALID });
  registerService
    .register({ firstName, lastName, username, password })
    .then(user => {
      clearRegisterForm(dispatch);
      dispatch({ type: types.REGISTRATION_SUCCESSFUL });
    })
    .catch(e => {
      notificationActions.showErrorMessage(dispatch, e.message);
    });
}

export function clearRegisterForm(dispatch) {
  [
    "register-firstName",
    "register-lastName",
    "register-username",
    "register-password",
  ].forEach(id => {
    dispatch({
      type: types.INPUT_VALUE_CHANGED,
      payload: { id: id, value: "" },
    });
  });
}

export function checkAvailabilityOfUsername(dispatch, username) {
  registerService
    .checkAvailabilityOfUsername(username)
    .then(() => {
      dispatch({
        type: types.USERNAME_AVAILABLE,
      });
    })
    .catch(e => {
      dispatch({
        type: types.USERNAME_UNAVAILABLE,
      });
    });
}

export function evaluateForm(
  dispatch,
  firstName,
  lastName,
  username,
  password,
  showingUsernameError
) {
  if (firstName && lastName && username && password) {
    dispatch({ type: types.REGISTER_FORM_VALID });
  } else {
    dispatch({ type: types.REGISTER_FORM_INVALID });
  }
}

export function done(dispatch) {
  dispatch({ type: types.REGISTRATION_DONE });
}
