import * as chatService from "../services/chatService";
import * as notificationActions from "../actions/notificationActions";
import * as types from "../actions/actionTypes";

export function loadChatRoom(dispatch, chatRoomId) {
  dispatch({ type: types.LOADING_CHAT_ROOM });
  chatService
    .loadChatRoom(chatRoomId)
    .then(chatRoom => {
      dispatch({ type: types.CHAT_ROOM_LOADED, payload: chatRoom });
    })
    .catch(e => {
      notificationActions.showErrorMessage(dispatch, e.message);
    });
}
