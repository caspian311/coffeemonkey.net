import * as adminApi from "./adminApi";

const usersUrl = `${adminApi.getBaseUrl()}/users`;

export function removeUser(userId) {
  return adminApi.deleteAdminCall(`${usersUrl}/${userId}`);
}

export function fetchUsers() {
  return adminApi.fetchAdminCall(`${usersUrl}`);
}
