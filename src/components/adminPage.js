import React from "react";

import AppPage from "./appPage";
import AdminRedirector from "./adminRedirector";

class AdminPage extends AppPage {
  pageContents() {
    return (
      <div>
        <AdminRedirector />
        {this.adminContents()}
      </div>
    );
  }

  adminContents() {}
}

export default AdminPage;
