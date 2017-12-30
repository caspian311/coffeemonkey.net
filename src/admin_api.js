import Auth from './auth';
let axios = require('axios');

const url = 'http://localhost:4567/secrets';
const options = { headers: { 'Authorization': Auth.getToken()} };

class AdminApi {
  static fetchSecrets() {
    return axios.get(url, options).then((response) => {
      return response.data['secrets'];
    });
  }
}

export default AdminApi;
