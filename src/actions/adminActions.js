import * as types from "./actionTypes";

export function newTitleChanged(dispatch, newTitle) {
  dispatch({ type: types.NEW_TITLE_CHANGED, payload: { newTitle } });
}
