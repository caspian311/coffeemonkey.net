import "../css/chat-rooms.css";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

import AdminPage from "./adminPage";
import * as chatRoomsActions from "../actions/chatRoomActions";

class ChatRooms extends AdminPage {
  componentWillMount() {
    this.props.loadRooms();
  }

  loadingScreen = () => {
    return <div>Loading...</div>;
  };

  joinRoom = roomId => {
    this.props.history.push(`/chatRooms/${roomId}`);
  };

  chatRoomsListings = () => {
    return (
      <table>
        <thead>
          <tr>
            <td>Room name</td>
            <td>Number of participants</td>
            <td>Last update</td>
            <td />
          </tr>
        </thead>
        {this.props.chatRooms.map((room, index) => {
          return (
            <tr key={room.id} className={index % 2 === 0 ? "" : "alt"}>
              <td>{room.name}</td>
              <td>{room.numberOfParticipants}</td>
              <td>{room.lastUpdated}</td>
              <td>
                <button onClick={() => this.joinRoom(room.id)}>
                  Join room
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    );
  };

  adminContents() {
    return (
      <div className="container chat-rooms">
        <h3 className="container-title">Chat Rooms</h3>
        <div className="content">
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChatRooms)
);
