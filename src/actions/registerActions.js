import * as types from "./actionTypes";
import * as registerService from "../services/registerService";
import * as notificationActions from "./notificationActions";

export function register(dispatch, firstName, lastName, username, password) {
  registerService
    .register({ firstName, lastName, username, password })
    .then(user => {
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
    })
    .catch(e => {
      notificationActions.showErrorMessage(dispatch, e.message);
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
