import "../css/profileAvatarSelector.css";

import { connect } from "react-redux";
import React, { Component } from "react";

import * as profileActions from "../actions/profileActions";

class ProfileAvatarSelector extends Component {
  selectAvatar = e => {
    const selectedAvatar = e.target.value;

    this.props.selectAvatarDispatch(selectedAvatar);
  };

  render() {
    return (
      <div className="profile-avatar">
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
)(ProfileAvatarSelector);
