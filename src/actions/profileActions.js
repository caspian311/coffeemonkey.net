import * as types from "./actionTypes";
import * as profileService from "../services/profileService";
import * as notificationActions from "./notificationActions";

export function selectAvatar(dispatch, selectedAvatar) {
  dispatch({ type: types.AVATAR_CHANGED, payload: { selectedAvatar } });
}

export async function updateProfile(dispatch, profile) {
  dispatch({ type: types.FORM_SAVING });
  try {
    const user = await profileService.updateProfile(profile);
    dispatch({ type: types.PROFILE_SAVED, payload: { user } });
    notificationActions.showSuccessMessage(
      dispatch,
      "Profile successfully updated."
    );
  } catch (error) {
    notificationActions.showErrorMessage(dispatch, error.message);
  }
}

export async function loadProfile(dispatch) {
  try {
    const profile = await profileService.getProfile();
    dispatch({
      type: types.INPUT_VALUE_CHANGED,
      payload: { id: "profile-firstname", value: profile.firstName },
    });
    dispatch({
      type: types.INPUT_VALUE_CHANGED,
      payload: { id: "profile-lastname", value: profile.lastName },
    });
    dispatch({ type: types.PROFILE_LOADED, payload: profile });
  } catch (error) {
    notificationActions.showErrorMessage(dispatch, error.message);
  }
}
