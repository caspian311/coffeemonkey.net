import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Banner from './banner';
import Main from './main';
import Login from './login';
import './app.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Banner />
            <Route exact={true} path="/" component={Main} />
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/contact" render={() => (
              <h1>Coming soon...</h1>
            )} />
        </div>
      </Router>
    );
  }
}

export default App;
