import "../css/app.css";
import "../css/avatar.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";

import Admin from "./admin";
import Banner from "./banner";
import Login from "./login";
import Main from "./main";
import Profile from "./profile";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route component={Banner} />
          <Route
            exact={true}
            path="/"
            render={props => <Main needsFooter={false} />}
          />
          <Route
            exact={true}
            path="/login"
            render={props => <Login needsFooter={false} />}
          />
          <Route
            exact={true}
            path="/admin"
            render={props => <Admin needsFooter={true} />}
          />
          <Route
            exact={true}
            path="/profile"
            render={props => <Profile needsFooter={true} />}
          />
          <Route
            exact={true}
            path="/contact"
            render={() => <h1>Coming soon...</h1>}
          />
        </div>
      </Router>
    );
  }
}

export default App;
