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

  buildUserItem(user) {
    return (
      <li>
        {user.lastName}, {user.firstName}
      </li>
    );
  }

  adminContents() {
    return (
      <div className="container">
        <h3 className="container-title">User Administration</h3>
        <div className={("content", "user-admin")}>
          <h3>Users</h3>

          <ul>{this.props.userList.map(this.buildUserItem)}</ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userList: state.userAdmin.userList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadUsers() {
      userAdminActions.loadUsers(dispatch);
    },
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserAdmin)
);
