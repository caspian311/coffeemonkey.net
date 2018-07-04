import Auth from "./auth";
let axios = require("axios");

const url = "http://localhost:4567/movies";

class AdminApi {
  static adminHeaders() {
    return { headers: { Authorization: Auth.getToken() } };
  }

  static addMovie(title) {
    return axios.post(url, { title: title });
  }
}

export default AdminApi;
