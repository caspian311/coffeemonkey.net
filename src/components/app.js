import "../css/app.css";
import "../css/avatar.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";

import MovieManagement from "./movieManagement";
import Banner from "./banner";
import Login from "./login";
import Notifications from "./notifications";
import Profile from "./profile";
import Register from "./register";
import SecondaryNavigation from "./secondaryNavigation";
import ChatRooms from "./chatRooms";
import ChatRoom from "./chatRoom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route component={Banner} />
          <Route component={SecondaryNavigation} />
          <Route component={Notifications} />
          <Route
            exact={true}
            path="/"
            render={props => <MovieManagement needsFooter={false} />}
          />
          <Route
            exact={true}
            path="/login"
            render={props => <Login needsFooter={false} />}
          />
          <Route
            exact={true}
            path="/register"
            render={props => <Register needsFooter={false} />}
          />
          <Route
            exact={true}
            path="/admin"
            render={props => <MovieManagement needsFooter={true} />}
          />
          <Route
            exact={true}
            path="/profile"
            render={props => <Profile needsFooter={true} />}
          />
          <Route
            exact={true}
            path="/chatRooms"
            render={props => <ChatRooms needsFooter={true} />}
          />
          <Route
            exact={true}
            path="/chatRooms/:chatRoomId"
            render={props => (
              <ChatRoom
                needsFooter={true}
                chatRoomId={props.match.params.chatRoomId}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
