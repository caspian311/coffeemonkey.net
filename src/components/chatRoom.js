import "../css/chat-room.css";

import { connect } from "react-redux";
import React from "react";

import AdminPage from "./adminPage";
import * as chatRoomActions from "../actions/chatRoomActions";

class ChatRoom extends AdminPage {
  componentDidMount() {
    this.props.loadChatRoom(this.props.chatRoomId);
  }

  loadingScreen = () => {
    return <div>Loading...</div>;
  };

  chatRoom = () => {
    return <h3>The Chat Room</h3>;
  };

  adminContents() {
    return (
      <div className="container chat-room">
        <h3 className="container-title">Chat Rooms</h3>
        <div className="content">
          {this.props.isLoading ? this.loadingScreen() : this.chatRoom()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.chatRoom.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadChatRoom(chatRoomId) {
      chatRoomActions.loadChatRoom(dispatch, chatRoomId);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatRoom);
