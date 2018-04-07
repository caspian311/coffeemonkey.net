var axios = require('axios');

class Api {
  static getMovies() {
    const baseUrl = 'http://localhost:4567';
    //const baseUrl = 'https://61vlqvtal7.execute-api.us-east-1.amazonaws.com/prod';

    return axios.get(baseUrl + "/movies").then(function(response) {
      return response.data['movies'];
    });
  }
}

export default Api;
