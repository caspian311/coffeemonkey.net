import { combineReducers } from "redux";
import login from "./loginReducer";
import admin from "./adminReducer";
import movie from "./movieReducer";

const rootReducer = combineReducers({
  login,
  admin,
  movie,
});

export default rootReducer;
