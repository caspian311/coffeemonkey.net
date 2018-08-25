import * as api from "./api";

export function register(payload) {
  return api.register(payload).then(response => {
    return {
      message: "all good!",
    };
  });
}

export function checkAvailabilityOfUsername(username) {
  return api.checkAvailabilityOfUsername(username);
}
