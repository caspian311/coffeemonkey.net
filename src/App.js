import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Admin from './admin';
import Banner from './banner';
import Login from './login';
import Main from './main';
import './app.css';

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
            <Route exact={true} path="/contact" render={() => (
              <h1>Coming soon...</h1>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
