import React, { Component } from "react";
import Auth from "../auth";
import AdminApi from "../admin_api";
import { Redirect } from "react-router-dom";

import "../css/admin.css";
import "../css/forms.css";

class Admin extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     secrets: [],
  //   };
  // }

  // componentDidMount() {
  //   if (!Auth.isAuthenticated()) {
  //     this.props.history.push("/login");
  //   }
  //
  //   this.populateSecrets();
  // }
  //
  // populateSecrets() {
  //   AdminApi.fetchSecrets().then(secrets => {
  //     this.setState(() => {
  //       let s = secrets.map((secret, index) => {
  //         return <li key={index}>{secret}</li>;
  //       });
  //
  //       return { secrets: s };
  //     });
  //   });
  // }

  render() {
    if (!Auth.isAuthenticated()) {
      return <Redirect to={"/login"} />;
    }

    return (
      <div className="container admin-movie">
        <h3 className="title">Admin</h3>
        <div className="content">
          <form>
            <input type="text" placeholder="Movie title" />
            <input type="button" value="Add" />
          </form>
          <ul>
            <li>
              <span>Movie One</span>
              <a
                href="#blah"
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                X
              </a>
            </li>
            <li className="alt">
              <span>Movie Two</span>
              <a
                href="#blah"
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                X
              </a>
            </li>
            <li>
              <span>Movie Three</span>
              <a
                href="#blah"
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                X
              </a>
            </li>
          </ul>
          {/* <ul>{this.state.secrets}</ul> */}
        </div>
      </div>
    );
  }
}

export default Admin;
