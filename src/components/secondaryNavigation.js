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

  buildNavItem(nav, index) {
    return (
      <li key={index}>
        <Link to={nav.path}>{nav.title}</Link>
      </li>
    );
  }

  render() {
    if (!this.props.isLoggedIn) {
      return <div />;
    }

    const navigation = [
      { title: "Movie Administration", path: "/admin" },
      { title: "Chat Rooms", path: "/chatRooms" },
      { title: "User Admin", path: "/userAdmin" },
    ];

    return (
      <div className="secondary-navigation">
        <ul>{navigation.map(this.buildNavItem)}</ul>
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
