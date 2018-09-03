import initialState from "./initialChatRoomsState";
import * as types from "../actions/actionTypes";

export default function chatRooms(state = initialState, action) {
  switch (action.type) {
    case types.LOADING_CHAT_ROOMS:
      return {
        ...state,
        isLoadingChatRooms: true,
        roomList: [],
      };
    case types.CHAT_ROOMS_LOADED:
      return {
        ...state,
        isLoadingChatRooms: false,
        roomList: action.payload,
      };
    default:
      return state;
  }
}
