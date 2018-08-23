import * as auth from "../services/auth";

export default {
  showLoginErrorMessage: false,
  errorMessage: "",
  shouldGoToAdmin: false,
  isLoggedIn: auth.isAuthenticated(),
  user: auth.getUser(),
};
