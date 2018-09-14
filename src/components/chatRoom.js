import "../css/chat-room.css";

import { connect } from "react-redux";
import React from "react";

import AdminPage from "./adminPage";
import ChatMessages from "./chatMessages";
import NewMessageForm from "./newMessageForm";
import * as chatRoomActions from "../actions/chatRoomActions";

class ChatRoom extends AdminPage {
  componentDidMount() {
    this.props.loadChatRoom(this.props.chatRoomId);
  }

  componentWillUnmount() {
    this.props.stopLoadingChat(this.props.roomIntervalId);
  }

  loadingScreen = () => {
    return <div>Loading...</div>;
  };

  chatRoom = () => {
    return (
      <div>
        <h3>{this.props.chatRoom.name}</h3>
        <ChatMessages chatMessages={this.props.chatRoom.chatMessages} />
        <NewMessageForm chatRoomId={this.props.chatRoom.id} />
      </div>
    );
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
    chatRoom: state.chatRoom.chatRoom,
    roomIntervalId: state.chatRoom.roomIntervalId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadChatRoom(chatRoomId) {
      chatRoomActions.loadChatRoom(dispatch, chatRoomId);
    },
    stopLoadingChat(roomIntervalId) {
      chatRoomActions.stopLoadingChat(roomIntervalId);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatRoom);
