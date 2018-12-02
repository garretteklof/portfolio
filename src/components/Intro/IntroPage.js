import React from "react";

import Icon from "../SpriteIcon";

const IntroPage = () => (
  <section className="intro">
    <div className="intro__info">
      <img
        className="intro__photo"
        src="images/intro/me.png"
        alt="garrett eklof"
      />
      <h1 className="intro__heading">garrett eklof</h1>
      <h4 className="intro__subheading">
        full stack web developer extraordinaire
      </h4>
    </div>
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
        href="mailto:garrett@leftside.design"
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
  </section>
);

export default IntroPage;
