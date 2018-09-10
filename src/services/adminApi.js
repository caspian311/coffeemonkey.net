import * as auth from "./auth";
let axios = require("axios");

const baseUrl = "http://localhost:4567";

export function adminHeaders() {
  return { headers: { Authorization: auth.getToken() } };
}

export function getBaseUrl() {
  return baseUrl;
}

export function fetchAdminCall(url) {
  return axios.get(url, adminHeaders()).then(data => {
    return data.data;
  });
}

export function postAdminCall(url, data) {
  return axios.post(url, data, adminHeaders()).then(data => {
    return data.data;
  });
}

export function putAdminCall(url, data) {
  return axios.put(url, data, adminHeaders()).then(data => {
    return data.data;
  });
}

export function deleteAdminCall(url) {
  return axios.delete(url, adminHeaders());
}
