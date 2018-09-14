import initialState from "./initialChatRoomState";
import * as types from "../actions/actionTypes";

export default function chatRoom(state = initialState, action) {
  switch (action.type) {
    case types.LOADING_CHAT_ROOM:
      return {
        ...state,
        isLoading: true,
      };
    case types.CHAT_ROOM_LOADED:
      return {
        ...state,
        isLoading: false,
        chatRoom: action.payload,
      };
    case types.NEW_CHAT_SUBMITTING:
      return {
        ...state,
        isSubmitting: true,
      };
    case types.NEW_CHAT_SUBMITTED:
      return {
        ...state,
        isSubmitting: false,
      };
    case types.LOADING_INTERVAL_SET:
      return {
        ...state,
        roomIntervalId: action.payload.roomIntervalId,
      };
    default:
      return state;
  }
}
