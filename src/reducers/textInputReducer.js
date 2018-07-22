import initialState from "./initialInputTextState";
import * as types from "../actions/actionTypes";

export default function profile(state = initialState, action) {
  switch (action.type) {
    case types.INPUT_VALUE_CHANGED:
      const newState = {
        ...state,
      };
      newState[action.payload.id] = action.payload.value;
      return newState;
    default:
      return state;
  }
}
