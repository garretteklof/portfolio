import React from "react";
import ReactDOM from "react-dom";
import AppRouter, { history } from "./routers/AppRouter";

import "./styles/styles.scss";

ReactDOM.render(<AppRouter />, document.getElementById("app"));
