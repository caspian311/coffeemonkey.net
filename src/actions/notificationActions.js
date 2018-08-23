import * as types from "./actionTypes";

export function hideMessage(dispatch, message) {
  dispatch({ type: types.HIDE_NOTIFICATION });
}
