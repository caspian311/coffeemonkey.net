import "../css/secondary-navigation.css";

import { connect } from "react-redux";
import React, { Component } from "react";

class SecondaryNavigation extends Component {
  render() {
    if (!this.props.isLoggedIn) {
      return <div />;
    }
    return (
      <div className="secondary-navigation">
        <ul>
          <li>
            <a>Foo</a>
          </li>
          <li>
            <a>Bar</a>
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
