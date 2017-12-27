let axios = require('axios');

const url = 'http://localhost:4567/secrets';

class AdminApi {
  static fetchSecrets() {
    return axios.get(url).then((response) => {
      return response.data['secrets'];
    });
  }
}

export default AdminApi;
