import "../css/notifications.css";

import { connect } from "react-redux";
import React, { Component } from "react";

import * as notificationActions from "../actions/notificationActions";

class Notifications extends Component {
  closeNotification = e => {
    e.preventDefault();
    e.stopPropagation();

    this.props.closeNotificationDispatch();
  };

  render() {
    const notificationClasses = `notifications ${this.props.type}`;
    return (
      <div className={notificationClasses}>
        <h1
          className={
            this.props.showMessage === undefined
              ? ""
              : this.props.showMessage
                ? "shown"
                : "hidden"
          }
        >
          {this.props.message}
          <span className="clickable" onClick={this.closeNotification}>
            X
          </span>
        </h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    type: state.notifications.type,
    showMessage: state.notifications.showMessage,
    message: state.notifications.message,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeNotificationDispatch() {
      notificationActions.hideMessage(dispatch);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications);
