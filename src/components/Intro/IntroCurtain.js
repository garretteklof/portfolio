import React from "react";

import IntroPage from "./IntroPage";

const IntroCurtain = ({ classes, node }) => (
  <div className={classes("intro")} ref={node}>
    <IntroPage />
  </div>
);

export default IntroCurtain;
