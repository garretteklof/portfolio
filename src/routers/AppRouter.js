import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "../components/App";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" component={App} exact={true} />
    </Switch>
  </Router>
);

export default AppRouter;
