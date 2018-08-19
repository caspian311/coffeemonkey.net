import * as types from "./actionTypes";
import * as adminApi from "../services/adminApi";

export function selectAvatar(dispatch, selectedAvatar) {
  dispatch({ type: types.AVATAR_CHANGED, payload: { selectedAvatar } });
}

export function updateProfile(dispatch, profile) {
  dispatch({ type: types.FORM_SAVING });
  adminApi.updateProfile(profile).then(() => {
    dispatch({ type: types.PROFILE_SAVED });
  });
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
