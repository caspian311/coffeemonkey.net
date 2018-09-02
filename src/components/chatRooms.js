import "../css/chat-rooms.css";

import { connect } from "react-redux";
import React from "react";

import AdminPage from "./adminPage";
import * as chatRoomsActions from "../actions/chatRoomsActions";

class ChatRooms extends AdminPage {
  componentWillMount() {
    this.props.loadRooms();
  }

  loadingScreen = () => {
    return <div>Loading...</div>;
  };

  chatRoomsListings = () => {
    return (
      <ul>
        {this.props.chatRooms.map(room => {
          return <li>{room.name}</li>;
        })}
      </ul>
    );
  };

  adminContents() {
    return (
      <div className="container chat-rooms">
        <h3 className="container-title">Chat Rooms</h3>
        <div className="content">
          <h3>Select a chat room to join...</h3>
          {this.props.isLoadingChatRooms
            ? this.loadingScreen()
            : this.chatRoomsListings()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    chatRooms: state.chatRooms.roomList,
    isLoadingChatRooms: state.chatRooms.isLoadingChatRooms,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadRooms() {
      chatRoomsActions.loadRooms(dispatch);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatRooms);
