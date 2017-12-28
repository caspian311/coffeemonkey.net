const sessionLength = 5 * 60 * 1000;

class Auth {
  static setSession(user) {
    let expirationDate = sessionLength + new Date().getTime();
    localStorage.setItem('authToken', user.token);
    localStorage.setItem('firstName', user.firstName);
    localStorage.setItem('lastName', user.lastName);
    localStorage.setItem('expiresAt', expirationDate);
  }

  static logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('expiresAt');
  }

  static isAuthenticated() {
    let expiresAt = localStorage.getItem('expiresAt');
    return new Date().getTime() < expiresAt;
  }

  static getUser() {
    return { 
      firstName: localStorage.getItem('firstName'), 
      lastName: localStorage.getItem('lastName') 
    };
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
