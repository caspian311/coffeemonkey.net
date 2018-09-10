import * as adminApi from "./adminApi";

const profileUrl = `${adminApi.getBaseUrl()}/profile`;

export function getProfile() {
  return adminApi.fetchAdminCall(profileUrl);
}

export function updateProfile(profile) {
  return adminApi.putAdminCall(profileUrl, profile);
}
