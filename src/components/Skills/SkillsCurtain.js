import React from "react";

import SkillsPage from "./SkillsPage";

const SkillsCurtain = ({ classes, skills }) => (
  <div className={classes("skills")} ref={skills}>
    <SkillsPage />
    <p className="skills__disclaimer">
      *** by no means exhaustive - if questions, please ask!
    </p>
  </div>
);

export default SkillsCurtain;
