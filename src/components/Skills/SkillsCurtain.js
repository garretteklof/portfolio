import React from "react";

import SkillsPage from "./SkillsPage";

const SkillsCurtain = ({ classes, skills }) => (
  <div className={classes("skills")} ref={skills}>
    <SkillsPage />
  </div>
);

export default SkillsCurtain;
