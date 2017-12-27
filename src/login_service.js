var axios = require('axios');

class LoginService {
  static login(loginData) {
    const url = 'http://localhost:4567/login';
    return axios.post(url, loginData).then((response) => {
      return response.data['authToken']
    });
  }
}

export default LoginService;
