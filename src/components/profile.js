import "../css/forms.css";
import "../css/profile.css";

import { connect } from "react-redux";
import React from "react";

import AppPage from "./appPage";
import TextInput from "./textInput";
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
        <div className={("content", "profile")}>
          <form onSubmit={this.profileFormSubmit}>
            <TextInput
              placeholder="First name"
              id="profile-firstname"
              value={this.props.firstname}
              withLabel={true}
            />

            <TextInput
              placeholder="Last name"
              id="profile-lastname"
              value={this.props.lastname}
              withLabel={true}
            />

            <TextInput
              placeholder="Password"
              id="profile-password"
              value={this.props.password}
              withLabel={true}
            />

            <div>
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
            </div>

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
