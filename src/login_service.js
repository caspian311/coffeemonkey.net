var axios = require('axios');

class LoginService {
  static login(loginData) {
    const url = 'http://localhost:4567/login';
    return axios.post(url, loginData).then((response) => {
      return { 
        authToken: response.data['authToken'],
        firstName: response.data['firstName'],
        lastName: response.data['lastName']
      }
    });
  }
}

export default LoginService;
