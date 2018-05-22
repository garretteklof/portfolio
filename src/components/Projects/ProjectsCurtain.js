import React from "react";

import ProjectsPage from "./ProjectsPage";

const ProjectsCurtain = ({ classes, projects }) => (
  <div className={classes("projects")} ref={projects}>
    <ProjectsPage />
  </div>
);

export default ProjectsCurtain;
