import * as types from "./actionTypes";
import * as adminApi from "../services/admin_api";

export function selectAvatar(dispatch, selectedAvatar) {
  dispatch({ type: types.AVATAR_CHANGED, payload: { selectedAvatar } });
}

export function loadProfile(dispatch) {
  adminApi.getProfile().then(profile => {
    dispatch({
      type: types.INPUT_VALUE_CHANGED,
      payload: { id: "profile-firstname", value: profile.data.firstName },
    });
    dispatch({
      type: types.INPUT_VALUE_CHANGED,
      payload: { id: "profile-lastname", value: profile.data.lastName },
    });
    dispatch({
      type: types.INPUT_VALUE_CHANGED,
      payload: { id: "profile-password", value: "blah blah blah" },
    });
    dispatch({ type: types.PROFILE_LOADED, payload: profile.data });
  });
}
