import initialState from "./initialAdminState";
import { NEW_TITLE_CHANGED } from "../actions/actionTypes";

export default function admin(state = initialState, action) {
  switch (action.type) {
    case NEW_TITLE_CHANGED:
      console.log("title changed");

      return {
        ...state,
        newTitle: action.payload.newTitle,
      };
    default:
      return state;
  }
}
