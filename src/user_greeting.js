import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from './auth';

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = { firstName: '', lastName: '' };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.setState(Auth.getUser());
  }

  logout(e) {
    e.preventDefault();

    Auth.logout();
    this.props.history.push('/login');
  }

  render() {
    return (
      <ul className="actions">
        <li>
          Welcome, {this.state.firstName} {this.state.lastName}!
        </li>
        <li>
          <a href="#" onClick={this.logout}>Logout</a>
        </li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    );
  }
}

export default UserGreeting;
