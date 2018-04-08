var axios = require('axios');

const baseUrl = 'http://localhost:4567';
//const baseUrl = 'https://8onw2k1yti.execute-api.us-east-1.amazonaws.com/prod';

class Api {
  static getMovies() {

    return axios.get(baseUrl + "/movies").then(function(response) {
      return response.data['movies'];
    });
  }

  static login(username, password) {
    let loginData = {
      username: username,
      password: password
    };
    return axios.post(baseUrl + "/login", loginData);
  }
}

export default Api;
