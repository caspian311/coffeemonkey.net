import * as auth from "./auth";
let axios = require("axios");

const baseUrl = "http://localhost:4567";
const moviesUrl = `${baseUrl}/movies`;
const profileUrl = `${baseUrl}/profile`;

export function adminHeaders() {
  return { headers: { Authorization: auth.getToken() } };
}

export function addMovie(title, year) {
  return axios.post(moviesUrl, { title, year }, adminHeaders());
}

export function deleteMovie(movieId) {
  return axios.delete(moviesUrl + "/" + movieId, adminHeaders());
}

export function getProfile() {
  return axios.get(profileUrl, adminHeaders()).then(data => {
    return data.data;
  });
}

export function updateProfile(profile) {
  return axios.put(profileUrl, profile, adminHeaders()).then(data => {
    return data.data;
  });
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
