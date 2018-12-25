import React from "react";
import ReactDOM from "react-dom";
import AppRouter, { history } from "./routers/AppRouter";
import { GlobalStyle } from "./globalStyle";

const App = () => (
  <>
    <GlobalStyle />
    <AppRouter />
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
