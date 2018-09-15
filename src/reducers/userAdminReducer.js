import initialState from "./initialUserAdminState";
import * as types from "../actions/actionTypes";

export default function userAdmin(state = initialState, action) {
  switch (action.type) {
    case types.USERS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case types.USERS_LOADED:
      return {
        ...state,
        isLoading: false,
        userList: action.payload,
      };
    case types.USER_DELETED:
      const disabledUserButtons = {};
      disabledUserButtons[action.payload] = true;
      return {
        ...state,
        disabledUserButtons: disabledUserButtons,
      };
    default:
      return state;
  }
}
