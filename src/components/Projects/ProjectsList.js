import React from "react";

const ProjectsList = ({ setProjectState }) => (
  <div className="projects__container">
    <div
      className="projects__project"
      onClick={() => setProjectState("aliveberry")}
    >
      <img src="/images/projects/aliveberry/aliveberry.svg" alt="Aliveberry" />
    </div>
    <div className="projects__project" onClick={() => setProjectState("carpi")}>
      <img src="/images/projects/carpi/carpi.svg" alt="Carpi" />
    </div>
    <div
      className="projects__project"
      onClick={() => setProjectState("skyguy")}
    >
      <img src="/images/projects/skyguy/skyguy.svg" alt="Skyguy" />
    </div>
    <div
      className="projects__project"
      onClick={() => setProjectState("chatterbot")}
    >
      <img src="/images/projects/chatterbot/chatterbot.svg" alt="Chatterbot" />
    </div>
    <div
      className="projects__project"
      onClick={() => setProjectState("forwird")}
    >
      <img src="/images/projects/forwird/forwird.svg" alt="Forwird" />
    </div>
  </div>
);
export default ProjectsList;
