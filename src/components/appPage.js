import React, { Component } from "react";

import Footer from "./footer";

class AppPage extends Component {
  render() {
    return (
      <div>
        <div className="main">{this.pageContents()}</div>
        {this.props.needsFooter && <Footer />}
      </div>
    );
  }

  pageContents() {}
}

export default AppPage;
