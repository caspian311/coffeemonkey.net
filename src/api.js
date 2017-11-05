var axios = require('axios');

class Api {
  static getMovies() {
    //var url = 'http://localhost:4567';
    var url = 'https://uled7x7uyb.execute-api.us-east-1.amazonaws.com/test1';
    return axios.get(url).then(function(response) {
      return response.data['movies'];
    });
  }
}

export default Api;
