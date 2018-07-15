import "../css/footer.css";

import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="attribution">
          Avatars designed by{" "}
          <a href="https://www.freepik.com/free-vector/variety-of-human-avatars_766615.htm">
            Freepik
          </a>
        </div>
        <div className="copy">&copy; 2018 Todd, Inc. All rights reserved.</div>
      </div>
    );
  }
}

export default Footer;
