import { combineReducers } from "redux";
import login from "./loginReducer";
import admin from "./adminReducer";

const rootReducer = combineReducers({
  login,
  admin,
});

export default rootReducer;
