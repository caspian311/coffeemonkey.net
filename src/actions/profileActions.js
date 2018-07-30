import * as types from "./actionTypes";
import * as adminApi from "../services/admin_api";

export function selectAvatar(dispatch, selectedAvatar) {
  dispatch({ type: types.AVATAR_CHANGED, payload: { selectedAvatar } });
}

export function loadProfile(dispatch) {
  adminApi.getProfile().then(profile => {
    dispatch({ type: types.PROFILE_LOADED, payload: profile });
  });
}
