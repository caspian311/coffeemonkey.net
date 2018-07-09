import * as types from "./actionTypes";

export function selectAvatar(dispatch, selectedAvatar) {
  dispatch({ type: types.AVATAR_CHANGED, payload: { selectedAvatar } });
}
