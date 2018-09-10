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
    default:
      return state;
  }
}
