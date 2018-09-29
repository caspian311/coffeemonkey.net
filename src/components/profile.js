import "../css/forms.css";
import "../css/profile.css";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import React from "react";

import AdminPage from "./adminPage";
import ProfileAvatarSelector from "./profileAvatarSelector";
import TextInput from "./textInput";

import * as profileActions from "../actions/profileActions";

class Profile extends AdminPage {
  profileFormSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    const profile = {
      firstName: this.props.firstname,
      lastName: this.props.lastname,
      selectedAvatar: this.props.selectedAvatar,
    };
    this.props.updateProfileDispatch(profile);
  };

  cancel = e => {
    e.preventDefault();
    e.stopPropagation();

    this.props.history.goBack();
  };

  componentWillMount() {
    this.props.loadProfileDispatch();
  }

  adminContents() {
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

            <ProfileAvatarSelector />

            <div className="button-bar">
              <button onClick={this.cancel}>Cancel</button>
              <input
                type="submit"
                value="Save Changes"
                disabled={this.props.shouldDisableSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    firstname: state.textInput["profile-firstname"],
    lastname: state.textInput["profile-lastname"],
    selectedAvatar: state.profile.selectedAvatar,
    shouldDisableSubmit: state.profile.shouldDisableSubmit,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadProfileDispatch() {
      profileActions.loadProfile(dispatch);
    },
    updateProfileDispatch(profile) {
      profileActions.updateProfile(dispatch, profile);
    },
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
);
