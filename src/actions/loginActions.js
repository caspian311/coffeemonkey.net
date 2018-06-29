import * as types from "./actionTypes";
import LoginService from "../login_service";
import Auth from "../auth";

export function login(dispatch, username, password) {
  LoginService.login(username, password)
    .then(user => {
      Auth.setSession(user);
      // this.props.history.push("/admin");
      dispatch({ type: types.LOGIN, payload: { user } });
    })
    .catch(e => {
      dispatch({ type: types.BAD_LOGIN, payload: { errorMessage: e.message } });
      // this.setState({
      //   error: "Incorrect username or password",
      //   username: this.state.username,
      //   password: this.state.password,
      // });
    });
}

export function usernameChanged(dispatch, username) {
  dispatch({ type: types.USERNAME_CHANGED, payload: { username } });
}

export function passwordChanged(dispatch, password) {
  dispatch({ type: types.PASSWORD_CHANGED, payload: { password } });
}

export function badLogin(dispatch) {
  dispatch({ type: types.BAD_LOGIN });
}
