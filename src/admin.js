import React, { Component } from 'react';
import Auth from './auth';
import './admin.css';

class Admin extends Component {
  componentDidMount() {
    if (!Auth.isAuthenticated()) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <h1>Admin!</h1>
    );
  }
}

export default Admin;

