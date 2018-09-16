import * as types from "./actionTypes";
import * as userService from "../services/userService";
import * as notificationActions from "./notificationActions";

export async function loadUsers(dispatch) {
  dispatch({ type: types.USERS_LOADING });
  try {
    const users = await userService.fetchUsers();
    dispatch({ type: types.USERS_LOADED, payload: users });
  } catch (e) {
    notificationActions.showErrorMessage(dispatch, e.message);
  }
}

export async function deleteUser(dispatch, userId) {
  try {
    dispatch({ type: types.USER_DELETING, payload: userId });
    await userService.deleteUser(userId);
    dispatch({ type: types.USER_DELETED });
    notificationActions.showSuccessMessage(
      dispatch,
      "User successfully deleted."
    );
    loadUsers(dispatch);
  } catch (e) {
    notificationActions.showErrorMessage(dispatch, e.message);
  }
}
