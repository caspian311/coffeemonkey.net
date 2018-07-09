import "../css/app.css";
import "../css/avatar.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";

import Admin from "./admin";
import Banner from "./banner";
import Login from "./login";
import Main from "./main";
import Profile from "./profile";
import Footer from "./footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route component={Banner} />
          <div className="main">
            <Route exact={true} path="/" component={Main} />
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/admin" component={Admin} />
            <Route exact={true} path="/profile" component={Profile} />
            <Route
              exact={true}
              path="/contact"
              render={() => <h1>Coming soon...</h1>}
            />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
