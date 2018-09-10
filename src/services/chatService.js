import * as adminApi from "./adminApi";

const chatRoomsUrl = `${adminApi.getBaseUrl()}/chatRooms`;

export function loadChatRooms() {
  return adminApi.fetchAdminCall(chatRoomsUrl);
}

export function loadChatRoom(chatRoomId) {
  return adminApi.fetchAdminCall(`${chatRoomsUrl}/${chatRoomId}`);
}

export function submitChatMessage(chatRoomId, newMessage) {
  const data = { newMessage };
  return adminApi.postAdminCall(`${chatRoomsUrl}/${chatRoomId}/message`, data);
}
