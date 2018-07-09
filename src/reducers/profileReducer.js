import initialState from "./initialProfileState";
import * as types from "../actions/actionTypes";

export default function profile(state = initialState, action) {
  switch (action.type) {
    case types.AVATAR_CHANGED:
      return {
        ...state,
        selectedAvatar: action.payload.selectedAvatar,
      };
    default:
      return state;
  }
}
