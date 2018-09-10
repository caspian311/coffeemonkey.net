import "../css/forms.css";
import "../css/new-message-form.css";

import { connect } from "react-redux";
import React, { Component } from "react";

import TextInput from "./textInput";
import * as chatActions from "../actions/chatActions";

class NewMessageForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    this.props.submitNewMessageDispatch(
      this.props.chatRoomId,
      this.props.newMessage
    );
  };

  render() {
    return (
      <form className="new-message" onSubmit={this.handleSubmit}>
        <TextInput
          placeholder="New message"
          id="chat-new-message"
          area={true}
          value={this.props.newMessage}
        />
        <input type="submit" value="Post" disabled={this.props.isSubmitting} />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    chatRoomId: state.chatRoom.chatRoom.id,
    newMessage: state.textInput["chat-new-message"],
    isSubmitting: state.chatRoom.isSubmitting,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitNewMessageDispatch(chatRoomId, newMessage) {
      chatActions.newChatMessage(dispatch, chatRoomId, newMessage);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMessageForm);
