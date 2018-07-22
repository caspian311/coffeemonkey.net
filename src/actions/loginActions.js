import * as types from "./actionTypes";
import * as loginService from "../services/login_service";
import * as auth from "../services/auth";

export function login(dispatch, username, password) {
  loginService
    .login(username, password)
    .then(user => {
      auth.setSession(user);
      dispatch({ type: types.LOGIN, payload: { user } });
    })
    .catch(e => {
      dispatch({ type: types.BAD_LOGIN, payload: { errorMessage: e.message } });
    });
}

export function badLogin(dispatch) {
  dispatch({ type: types.BAD_LOGIN });
}
