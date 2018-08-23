import initialState from "./initialProfileState";
import * as types from "../actions/actionTypes";

export default function profile(state = initialState, action) {
  switch (action.type) {
    case types.AVATAR_CHANGED:
      return {
        ...state,
        selectedAvatar: action.payload.selectedAvatar,
      };
    case types.PROFILE_LOADED:
      return {
        ...state,
        selectedAvatar: action.payload.selectedAvatar,
      };
    case types.FORM_SAVING:
      return {
        ...state,
        shouldDisableSubmit: true,
      };
    case types.PROFILE_SAVED:
      return {
        ...state,
        shouldDisableSubmit: false,
      };
    default:
      return state;
  }
}
