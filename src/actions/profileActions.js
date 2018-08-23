import * as types from "./actionTypes";
import * as adminApi from "../services/adminApi";
import * as notificationActions from "./notificationActions";

export function selectAvatar(dispatch, selectedAvatar) {
  dispatch({ type: types.AVATAR_CHANGED, payload: { selectedAvatar } });
}

export function updateProfile(dispatch, profile) {
  dispatch({ type: types.FORM_SAVING });
  adminApi.updateProfile(profile).then(user => {
    dispatch({ type: types.PROFILE_SAVED, payload: { user } });
    notificationActions.showSuccessMessage(
      dispatch,
      "Profile successfully updated."
    );
  });
}

export function loadProfile(dispatch) {
  adminApi.getProfile().then(profile => {
    dispatch({
      type: types.INPUT_VALUE_CHANGED,
      payload: { id: "profile-firstname", value: profile.firstName },
    });
    dispatch({
      type: types.INPUT_VALUE_CHANGED,
      payload: { id: "profile-lastname", value: profile.lastName },
    });
    dispatch({ type: types.PROFILE_LOADED, payload: profile });
  });
}
