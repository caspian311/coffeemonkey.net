var axios = require("axios");

const baseUrl = "http://localhost:4567";
//const baseUrl = 'https://wdw4w3pvrk.execute-api.us-east-1.amazonaws.com/prod';

export function getMovies() {
  return axios.get(baseUrl + "/movies").then(function(response) {
    return response.data["movies"];
  });
}

export function login(username, password) {
  const loginData = {
    username: username,
    password: password,
  };
  return axios.post(baseUrl + "/login", loginData);
}
