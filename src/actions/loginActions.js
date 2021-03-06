import * as types from "./actionTypes";
import * as loginService from "../services/loginService";
import * as auth from "../services/auth";
import * as notificationActions from "./notificationActions";

export async function login(dispatch, username, password) {
  try {
    const user = await loginService.login(username, password);
    auth.setSession(user);
    dispatch({ type: types.LOGIN, payload: { user } });
    dispatch({
      type: types.INPUT_VALUE_CHANGED,
      payload: { id: "login-username", value: "" },
    });
    dispatch({
      type: types.INPUT_VALUE_CHANGED,
      payload: { id: "login-password", value: "" },
    });
  } catch (e) {
    notificationActions.showErrorMessage(dispatch, e.message);
  }
}

export function logout(dispatch) {
  auth.logout();
  dispatch({ type: types.LOGOUT });
}

export function populateUserToState(dispatch) {
  if (auth.isAuthenticated()) {
    dispatch({
      type: types.LOGIN,
      payload: { user: auth.getUser() },
    });
  }
}
