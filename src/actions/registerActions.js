import * as types from "./actionTypes";
import * as registerService from "../services/registerService";
import * as notificationActions from "./notificationActions";

export async function register(
  dispatch,
  firstName,
  lastName,
  username,
  password
) {
  dispatch({ type: types.REGISTER_FORM_INVALID });
  try {
    await registerService.register({
      firstName,
      lastName,
      username,
      password,
    });
    clearRegisterForm(dispatch);
    dispatch({ type: types.REGISTRATION_SUCCESSFUL });
  } catch (e) {
    notificationActions.showErrorMessage(dispatch, e.message);
  }
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

export async function checkAvailabilityOfUsername(dispatch, username) {
  try {
    await registerService.checkAvailabilityOfUsername(username);
    dispatch({
      type: types.USERNAME_AVAILABLE,
    });
  } catch (e) {
    dispatch({
      type: types.USERNAME_UNAVAILABLE,
    });
  }
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
