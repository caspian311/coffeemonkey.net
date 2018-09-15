import { combineReducers } from "redux";
import login from "./loginReducer";
import register from "./registerReducer";
import admin from "./adminReducer";
import movie from "./movieReducer";
import profile from "./profileReducer";
import textInput from "./textInputReducer";
import notifications from "./notificationsReducer";
import chatRooms from "./chatRoomsReducer";
import chatRoom from "./chatRoomReducer";

const rootReducer = combineReducers({
  login,
  register,
  admin,
  movie,
  profile,
  textInput,
  notifications,
  chatRooms,
  chatRoom,
});

export default rootReducer;
