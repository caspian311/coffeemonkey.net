export function setSession(user) {
  localStorage.setItem("authToken", user.authToken);
  localStorage.setItem("firstName", user.firstName);
  localStorage.setItem("lastName", user.lastName);
  localStorage.setItem("expiresAt", user.expiresAt);
}

export function logout() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("firstName");
  localStorage.removeItem("lastName");
  localStorage.removeItem("expiresAt");
}

export function isAuthenticated() {
  let expiresAt = localStorage.getItem("expiresAt");
  let expiresAtDate = Date.parse(expiresAt);
  return new Date().getTime() < expiresAtDate;
}

export function getUser() {
  return isAuthenticated()
    ? {
        firstName: localStorage.getItem("firstName"),
        lastName: localStorage.getItem("lastName"),
      }
    : null;
}

export function getToken() {
  if (isAuthenticated()) {
    return localStorage.getItem("authToken");
  } else {
    console.log("no auth token stored");
    return null;
  }
}
