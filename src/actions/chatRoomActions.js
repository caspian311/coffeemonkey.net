import * as chatService from "../services/chatService";
import * as notificationActions from "../actions/notificationActions";
import * as types from "../actions/actionTypes";

export function loadRooms(dispatch) {
  dispatch({ type: types.LOADING_CHAT_ROOMS });
  chatService
    .loadChatRooms()
    .then(chatRooms => {
      dispatch({ type: types.CHAT_ROOMS_LOADED, payload: chatRooms });
    })
    .catch(error => {
      notificationActions.showErrorMessage(dispatch, error.message);
    });
}

function gatherMessages(dispatch, chatRoomId) {
  chatService
    .loadChatRoom(chatRoomId)
    .then(chatRoom => {
      dispatch({ type: types.CHAT_ROOM_LOADED, payload: chatRoom });
    })
    .catch(e => {
      notificationActions.showErrorMessage(dispatch, e.message);
    });
}

export function stopLoadingChat(roomIntervalId) {
  clearInterval(roomIntervalId);
}

export function loadChatRoom(dispatch, chatRoomId) {
  dispatch({ type: types.LOADING_CHAT_ROOM });

  var roomIntervalId = setInterval(
    () => gatherMessages(dispatch, chatRoomId),
    1000
  );

  dispatch({ type: types.LOADING_INTERVAL_SET, payload: { roomIntervalId } });
}

export function newChatMessage(dispatch, chatRoomId, newMessage) {
  dispatch({ type: types.NEW_CHAT_SUBMITTING });
  chatService
    .submitChatMessage(chatRoomId, newMessage)
    .then(() => {
      dispatch({
        type: types.INPUT_VALUE_CHANGED,
        payload: { id: "chat-new-message", value: "" },
      });
      dispatch({ type: types.NEW_CHAT_SUBMITTED });
    })
    .catch(e => {
      notificationActions.showErrorMessage(dispatch, e.message);
      dispatch({ type: types.NEW_CHAT_SUBMITTED });
      dispatch({
        type: types.INPUT_VALUE_CHANGED,
        payload: { id: "chat-new-message", value: "" },
      });
    });
}
