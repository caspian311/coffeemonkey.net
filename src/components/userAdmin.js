import "../css/forms.css";
import "../css/user-admin.css";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import React from "react";

import AdminPage from "./adminPage";
import * as userAdminActions from "../actions/userAdminActions";

class UserAdmin extends AdminPage {
  componentWillMount() {
    this.props.loadUsers();
  }

  deleteUser = userId => {
    this.props.deleteUser(userId);
  };

  buildUserItem = (user, index) => {
    return (
      <tr className={index % 2 === 1 ? "alt" : ""} key={index}>
        <td>{user.username}</td>
        <td>{user.lastName}</td>
        <td>{user.firstName}</td>
        <td>{user.lastLogin}</td>
        <td>
          <button
            disabled={this.props.disabledUserButtons[user.id] === true}
            onClick={() => this.deleteUser(user.id)}
          >
            X
          </button>
        </td>
      </tr>
    );
  };

  adminContents() {
    return (
      <div className="container">
        <h3 className="container-title">User Administration</h3>
        <div className={("content", "user-admin")}>
          <h3>Users</h3>

          <table id="users-table">
            <thead>
              <tr>
                <td>Username</td>
                <td>Last name</td>
                <td>First name</td>
                <td>Last login</td>
                <td />
              </tr>
            </thead>
            <tbody>{this.props.userList.map(this.buildUserItem)}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userList: state.userAdmin.userList,
    disabledUserButtons: state.userAdmin.disabledUserButtons,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadUsers() {
      userAdminActions.loadUsers(dispatch);
    },
    deleteUser(userId) {
      userAdminActions.deleteUser(dispatch, userId);
    },
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserAdmin)
);
