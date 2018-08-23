import initialState from "./initialNotificationsState";
import * as types from "../actions/actionTypes";

export default function notifications(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_NOTIFICATION:
      return {
        ...state,
        type: action.payload.type,
        showMessage: true,
        message: action.payload.message,
      };
    case types.HIDE_NOTIFICATION:
      return {
        ...state,
        showMessage: false,
        message: "",
      };
    default:
      return state;
  }
}
