import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "../components/Main";
import Toolbox from "../components/Toolbox/";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/toolbox" component={Toolbox} exact={true} />
      <Route path="/" component={Main} />
    </Switch>
  </Router>
);

export default AppRouter;
