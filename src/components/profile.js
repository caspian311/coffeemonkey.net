import { connect } from "react-redux";
import React, { Component } from "react";

import * as profileActions from "../actions/profileActions";

class Profile extends Component {
  selectAvatar = e => {
    const selectedAvatar = e.target.value;

    this.props.selectAvatarDispatch(selectedAvatar);
  };

  render() {
    return (
      <div className="container">
        <h3 className="container-title">Profile</h3>
        <div className="content">
          <select
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
