import { combineReducers } from "redux";
import login from "./loginReducer";
import admin from "./adminReducer";
import movie from "./movieReducer";
import profile from "./profileReducer";

const rootReducer = combineReducers({
  login,
  admin,
  movie,
  profile,
});

export default rootReducer;
