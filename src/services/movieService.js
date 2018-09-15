import * as adminApi from "./adminApi";

const moviesUrl = `${adminApi.getBaseUrl()}/movies`;

export function addMovie(title, year) {
  const data = { title, year };
  return adminApi.postAdminCall(`${moviesUrl}`, data);
}

export function deleteMovie(movieId) {
  return adminApi.deleteAdminCall(`${moviesUrl}/${movieId}`);
}
