import React, { Component } from 'react';
import Banner from './banner'
import Main from './main'
import './app.css';

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Main />
      </div>
    );
  }
}

export default App;
