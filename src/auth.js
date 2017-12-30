class Auth {
  static setSession(user) {
    localStorage.setItem('authToken', user.authToken);
    localStorage.setItem('firstName', user.firstName);
    localStorage.setItem('lastName', user.lastName);
    localStorage.setItem('expiresAt', user.expiresAt);
  }

  static logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('expiresAt');
  }

  static isAuthenticated() {
    let expiresAt = localStorage.getItem('expiresAt');
    let expiresAtDate = Date.parse(expiresAt);
    return new Date().getTime() < expiresAtDate;
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
