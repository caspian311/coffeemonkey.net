var axios = require('axios');

class Api {
  static getMovies() {
    return axios.get('http://localhost:4567/').then(function(response) {
      return response.data['movies'];
    });
  }
}

export default Api;
