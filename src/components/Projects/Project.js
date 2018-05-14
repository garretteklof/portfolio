import React from "react";

import Icon from "../SpriteIcon";

const Project = ({ name, description, tech, nav, heroku, setProjectState }) => (
  <div className="project__grid">
    <div className="project__nav">
      {nav.map((project, i) => (
        <div
          className="project__nav-link"
          onClick={() => setProjectState(project)}
          key={i}
        >
          <img
            src={`/images/projects/${project}/${project}.svg`}
            alt={project}
          />
        </div>
      ))}
    </div>
    <img
      className="project__screenshot"
      src={`images/projects/${name}/${name}-screenshot.png`}
    />
    <div className="project__info">
      <div className="project__name">
        <div className="project__logo">
          <img src={`images/projects/${name}/${name}.svg`} alt={name} />
        </div>
        <h1>{name}</h1>
      </div>
      <p className="project__description">{description}</p>
      <span className="project__tech">{tech.map(img => img)}</span>
      <div className="project__external">
        <a className="project__heroku" href={heroku} target="_blank">
          <img src="images/tech-logos/heroku.svg" alt="heroku" />
        </a>
        <a
          className="project__github"
          href={`https://github.com/garretteklof/${name}`}
          target="_blank"
        >
          <Icon icon="github" />
        </a>
      </div>
    </div>
  </div>
);
export default Project;
