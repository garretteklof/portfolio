import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "../components/Main";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" component={Main} exact={true} />
    </Switch>
  </Router>
);

export default AppRouter;
