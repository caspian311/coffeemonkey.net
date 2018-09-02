import "../css/secondary-navigation.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React, { Component } from "react";

class SecondaryNavigation extends Component {
  movieAdminPath = () => {
    return "/admin";
  };

  chatRoomsPath = () => {
    return "/chatRooms";
  };

  render() {
    if (!this.props.isLoggedIn) {
      return <div />;
    }
    return (
      <div className="secondary-navigation">
        <ul>
          <li>
            <Link to={this.movieAdminPath()}>Movie Administration</Link>
          </li>
          <li>
            <Link to={this.chatRoomsPath()}>Chat Rooms</Link>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.login.isLoggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondaryNavigation);
