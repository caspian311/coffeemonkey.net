import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Banner from './banner';
import Main from './main';
import Login from './login';
import Admin from './admin';
import './app.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Banner />
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
