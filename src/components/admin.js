import React, { Component } from "react";
import Auth from "../auth";
import AdminApi from "../admin_api";
import "../css/admin.css";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secrets: [],
    };
  }

  componentDidMount() {
    if (!Auth.isAuthenticated()) {
      this.props.history.push("/login");
    }

    this.populateSecrets();
  }

  populateSecrets() {
    AdminApi.fetchSecrets().then(secrets => {
      this.setState(() => {
        let s = secrets.map((secret, index) => {
          return <li key={index}>{secret}</li>;
        });

        return { secrets: s };
      });
    });
  }

  render() {
    return (
      <div className="container">
        <h3 className="title">Admin</h3>
        <div className="content">
          <ul>{this.state.secrets}</ul>
        </div>
      </div>
    );
  }
}

export default Admin;
