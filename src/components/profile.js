import { connect } from "react-redux";
import React from "react";

import AppPage from "./appPage";
import * as profileActions from "../actions/profileActions";

class Profile extends AppPage {
  selectAvatar = e => {
    const selectedAvatar = e.target.value;

    this.props.selectAvatarDispatch(selectedAvatar);
  };

  profileFormSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    console.log("saving profile...");
  };

  cancel = e => {
    console.log("cancel action");
  };

  pageContents() {
    return (
      <div className="container">
        <h3 className="container-title">Profile</h3>
        <div className="content">
          <form onSubmit={this.profileFormSubmit}>
            <label htmlFor="firstName">First name</label>
            <input
              id="firstName"
              type="text"
              value={this.props.firstName}
              placeholder="First name"
            />

            <label htmlFor="lastName">Last name</label>
            <input
              id="lastName"
              type="text"
              value={this.props.lastName}
              placeholder="First name"
            />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={this.props.password} />
            <label htmlFor="avatar">Profile picture</label>
            <select
              id="avatar"
              value={this.props.selectedAvatar}
              onChange={this.selectAvatar}
            >
              {this.props.avatars.map((avatar, index) => {
                return (
                  <option key={index} value={avatar}>
                    {avatar}
                  </option>
                );
              })}
            </select>
            <div className={`avatar ${this.props.selectedAvatar}`} />
            <input type="submit" value="Save Changes" />
            <button onClick={this.cancel}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    avatars: state.profile.avatars,
    selectedAvatar: state.profile.selectedAvatar,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectAvatarDispatch(selectedAvatar) {
      profileActions.selectAvatar(dispatch, selectedAvatar);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
