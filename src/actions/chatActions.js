import * as chatService from "../services/chatService";
import * as types from "./actionTypes";
import * as notificationActions from "./notificationActions";

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
