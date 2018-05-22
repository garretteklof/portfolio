import React from "react";

import AboutPage from "./AboutPage";

const AboutCurtain = ({ classes, about }) => (
  <div className={classes("about")} ref={about}>
    <AboutPage />
  </div>
);

export default AboutCurtain;
