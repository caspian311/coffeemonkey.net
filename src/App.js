import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    const user = {
      firstName: 'Matt',
      lastName: 'Todd'
    }

    function formatName(user) {
      return user.firstName + ' ' + user.lastName;
    }

    function Welcome(props) {
      return <h1>Hello, {props.name}!</h1>
    }

    class Clock extends React.Component {
      constructor(props) {
        super(props);
        this.state = {date: new Date()}
      }

      componentDidMount() {
        this.timeId = setInterval(
          () => this.tick(),
          1000
        );
      }

      componentWillUnmount() {
        clearInterval(this.timeId);
      }

      tick() {
        this.setState({
          date: new Date()
        });
      }

      render() {
        return (
          <h3>The time is: {this.state.date.toLocaleTimeString()}</h3>
        );
      }
    }

    return (
      <div>
        <Welcome name="Matt" />
        <Welcome name="Abbi" />
        <Welcome name="Caleb" />
        <Clock />
      </div>
    );
  }
}

export default App;
