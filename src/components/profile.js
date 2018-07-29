import "../css/forms.css";
import "../css/profile.css";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import React from "react";

import AppPage from "./appPage";
import ProfileAvatarSelector from "./profileAvatarSelector";
import TextInput from "./textInput";

class Profile extends AppPage {
  profileFormSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    console.log("saving profile...");
  };

  cancel = e => {
    e.preventDefault();
    e.stopPropagation();

    this.props.history.goBack();
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

            <ProfileAvatarSelector />

            <input type="submit" value="Save Changes" />
            <button onClick={this.cancel}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
);
