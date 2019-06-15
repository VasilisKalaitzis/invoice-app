import React from "react";
import { Switch, Route } from "react-router-dom";
import Invoice from "../Invoice/index";

// assign our route paths
const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/invoice/:invoiceId" component={Invoice} />
      {/* per requirement - supporting "/invoice?invoiceId=:id"*/}
      <Route path="/invoice" component={Invoice} />
    </Switch>
  </main>
);

export default Routes;
