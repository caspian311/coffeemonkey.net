var axios = require('axios');

class LoginService {
  static login(loginData) {
    const url = 'http://localhost:4567/login';
    return axios.post(url, loginData).then((response) => {
      let expiresAtResponseData = response.data['expiresAt'];
      let expiresAtDate = new Date(0);
      expiresAtDate.setUTCSeconds(expiresAtResponseData);
      return { 
        authToken: response.data['authToken'],
        firstName: response.data['firstName'],
        lastName: response.data['lastName'],
        expiresAt: expiresAtDate
      }
    });
  }
}

export default LoginService;
