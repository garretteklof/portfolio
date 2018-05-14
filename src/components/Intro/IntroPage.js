import React from "react";

import Icon from "../SpriteIcon";

const IntroPage = () => (
  <section className="intro">
    <div className="intro__grid">
      <div className="intro__photo">Photo goes here</div>
      <div className="intro__info">
        <h1 className="intro__heading">garrett eklof</h1>
        <h4 className="intro__subheading">
          full stack web developer extraordinaire
        </h4>
        <div className="intro__social">
          <a
            className="intro__social-box"
            href="https://github.com/garretteklof"
            target="_blank"
          >
            <Icon icon="github" />
          </a>
          <a
            className="intro__social-box"
            href="mailto:garrett.eklof@gmail.com"
            target="_blank"
          >
            <Icon icon="mail" />
          </a>
          <a
            className="intro__social-box"
            href="https://www.linkedin.com/in/garrett-eklof"
            target="_blank"
          >
            <Icon icon="linkedin" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default IntroPage;
