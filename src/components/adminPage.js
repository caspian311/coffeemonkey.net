import { Redirect } from "react-router-dom";
import React from "react";

import AppPage from "./appPage";
import * as auth from "../services/auth";

class AdminPage extends AppPage {
  pageContents() {
    if (!auth.isAuthenticated()) {
      return <Redirect to={"/login"} />;
    }

    return this.adminContents();
  }

  adminContents() {}
}

export default AdminPage;
