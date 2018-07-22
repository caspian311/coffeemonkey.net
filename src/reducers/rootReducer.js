import { combineReducers } from "redux";
import login from "./loginReducer";
import admin from "./adminReducer";
import movie from "./movieReducer";
import profile from "./profileReducer";
import textInput from "./textInputReducer";

const rootReducer = combineReducers({
  login,
  admin,
  movie,
  profile,
  textInput,
});

export default rootReducer;
