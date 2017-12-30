import Auth from './auth';
let axios = require('axios');

const url = 'http://localhost:4567/secrets';

class AdminApi {
  static adminHeaders() {
    return { headers: { 'Authorization': Auth.getToken()} };
  }

  static fetchSecrets() {
    return axios.get(url, AdminApi.adminHeaders()).then((response) => {
      return response.data['secrets'];
    });
  }
}

export default AdminApi;
