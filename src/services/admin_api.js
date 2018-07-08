import * as auth from "./auth";
let axios = require("axios");

const url = "http://localhost:4567/movies";

export function adminHeaders() {
  return { headers: { Authorization: auth.getToken() } };
}

export function addMovie(title, year) {
  return axios.post(url, { title, year }, adminHeaders());
}

export function deleteMovie(movieId) {
  return axios.delete(url + "/" + movieId, adminHeaders());
}
