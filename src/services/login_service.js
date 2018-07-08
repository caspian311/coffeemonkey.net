import Api from './api'

class LoginService {
  static login(username, password) {
    return Api.login(username, password).then((response) => {
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
