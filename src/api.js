var axios = require('axios');

class Api {
  static getMovies() {
    const url = 'http://localhost:4567/movies';
    //const url = 'https://uled7x7uyb.execute-api.us-east-1.amazonaws.com/test1';
    return axios.get(url).then(function(response) {
      return response.data['movies'];
    });
  }
}

export default Api;
