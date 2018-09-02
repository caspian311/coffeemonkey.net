import * as adminApi from "../services/adminApi";
import * as types from "./actionTypes";
import * as notificationActions from "./notificationActions";

export function loadRooms(dispatch) {
  dispatch({ type: types.LOADING_CHAT_ROOMS });
  adminApi
    .loadChatRooms()
    .then(chatRooms => {
      dispatch({ type: types.CHAT_ROOMS_LOADED, payload: chatRooms });
    })
    .catch(error => {
      notificationActions.showErrorMessage(dispatch, error.message);
    });
}
