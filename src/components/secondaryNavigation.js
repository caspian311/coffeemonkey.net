import "../css/secondary-navigation.css";

import { connect } from "react-redux";
import React, { Component } from "react";

class SecondaryNavigation extends Component {
  render() {
    return (
      <div className="secondary-navigation">
        <ul>
          <a>Foo</a>
          <a>Bar</a>
        </ul>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondaryNavigation);
