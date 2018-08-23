import * as types from "./actionTypes";

export function hideMessage(dispatch) {
  dispatch({ type: types.HIDE_NOTIFICATION });
}

export function showSuccessMessage(dispatch, message) {
  setTimeout(() => hideMessage(dispatch), 3000);

  dispatch({
    type: types.SHOW_NOTIFICATION,
    payload: { message, type: "success" },
  });
}

export function showErrorMessage(dispatch, message) {
  setTimeout(() => hideMessage(dispatch), 3000);

  dispatch({
    type: types.SHOW_NOTIFICATION,
    payload: { message, type: "error" },
  });
}
