import * as chatService from "../services/chatService";
import * as notificationActions from "../actions/notificationActions";
import * as types from "../actions/actionTypes";

export async function loadRooms(dispatch) {
  dispatch({ type: types.LOADING_CHAT_ROOMS });
  try {
    const chatRooms = await chatService.loadChatRooms();
    dispatch({ type: types.CHAT_ROOMS_LOADED, payload: chatRooms });
  } catch (error) {
    notificationActions.showErrorMessage(dispatch, error.message);
  }
}

async function gatherMessages(dispatch, chatRoomId) {
  try {
    const chatRoom = await chatService.loadChatRoom(chatRoomId);
    dispatch({ type: types.CHAT_ROOM_LOADED, payload: chatRoom });
  } catch (e) {
    notificationActions.showErrorMessage(dispatch, e.message);
  }
}

export function stopLoadingChat(roomIntervalId) {
  clearInterval(roomIntervalId);
}

export async function loadChatRoom(dispatch, chatRoomId) {
  dispatch({ type: types.LOADING_CHAT_ROOM });
  try {
    await chatService.joinChatRoom(chatRoomId);

    var roomIntervalId = setInterval(
      () => gatherMessages(dispatch, chatRoomId),
      1000
    );

    dispatch({ type: types.LOADING_INTERVAL_SET, payload: { roomIntervalId } });
  } catch (error) {
    notificationActions.showErrorMessage(dispatch, error.message);
  }
}

export async function newChatMessage(dispatch, chatRoomId, newMessage) {
  dispatch({ type: types.NEW_CHAT_SUBMITTING });
  try {
    await chatService.submitChatMessage(chatRoomId, newMessage);
    dispatch({
      type: types.INPUT_VALUE_CHANGED,
      payload: { id: "chat-new-message", value: "" },
    });
    dispatch({ type: types.NEW_CHAT_SUBMITTED });
  } catch (e) {
    notificationActions.showErrorMessage(dispatch, e.message);
    dispatch({ type: types.NEW_CHAT_SUBMITTED });
    dispatch({
      type: types.INPUT_VALUE_CHANGED,
      payload: { id: "chat-new-message", value: "" },
    });
  }
}
