import * as auth from "./auth";
let axios = require("axios");

const baseUrl = "http://localhost:4567";
const moviesUrl = `${baseUrl}/movies`;
const profileUrl = `${baseUrl}/profile`;
const chatRoomsUrl = `${baseUrl}/chatRooms`;

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

export function loadChatRooms() {
  return axios.get(chatRoomsUrl, adminHeaders()).then(data => {
    return data.data;
  });
}

export function loadChatRoom(chatRoomId) {
  return axios
    .get(`${chatRoomsUrl}/${chatRoomId}`, adminHeaders())
    .then(data => {
      return data.data;
    });
}
