const sessionLength = 5 * 60 * 1000;

class Auth {
  static setSession(token) {
    let expirationDate = sessionLength + new Date().getTime();
    localStorage.setItem('authToken', token);
    localStorage.setItem('expiresAt', expirationDate);
  }

  static isAuthenticated() {
    let expiresAt = localStorage.getItem('expiresAt');
    return new Date().getTime() < expiresAt;
  }

  static getToken() {
    if (this.isAuthenticated()) {
      return localStorage.getItem('authToken');
    } else {
      return null;
    }
  }
}

export default Auth;
