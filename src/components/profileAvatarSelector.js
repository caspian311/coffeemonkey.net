import "../css/profileAvatarSelector.css";

import { connect } from "react-redux";
import React, { Component } from "react";

import * as profileActions from "../actions/profileActions";

class ProfileAvatarSelector extends Component {
  selectAvatar = e => {
    const selectedAvatar = e.target.value;

    this.props.selectAvatarDispatch(selectedAvatar);
  };

  avatarKeyPress = e => {
    if ("createEvent" in document) {
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent("change", false, true);
      e.target.dispatchEvent(evt);
    } else {
      e.target.fireEvent("onchange");
    }
  };

  render() {
    return (
      <div className="profile-avatar">
        <label htmlFor="avatar">Profile picture</label>
        <select
          id="avatar"
          value={this.props.selectedAvatar}
          onChange={this.selectAvatar}
          onKeyPress={this.avatarKeyPress}
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
