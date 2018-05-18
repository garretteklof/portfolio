import React from "react";

const AboutPage = () => (
  <section className="about">
    <div className="about__text-grid">
      <h1 className="about__heading">It was all a dream...</h1>
      <p>
        And it started - not with an issue of <i>Word Up!</i> magazine - but a
        very elaborate, very pressing, multi-million dollar vision.
      </p>

      <span className="about__iintrinsic">
        <img src="/images/about/iintrinsic.svg" />
        <img src="/images/about/iintrinsic-tagline.svg" />
      </span>

      <p>
        I never did finish it - the next, latest, greatest, multi-million dollar
        social network - but I did end up learning quite a bit about web
        development in the process. From a WordPress CMS, to Ruby, to hacking my
        way through Bootstrap templates and the newest, trendiest, front-end
        frameworks, I slowly but surely began to transmogrify into a real,
        living, breathing, web aficionado.
      </p>

      <p>
        As a developer, I take great pride in writing code that's both sensible
        and maintainable, prescribing to the philosophy that cobbling together
        third-party libraries is, almost, never the answer. I love big ideas -
        the more grandiose, the better - and the more beautiful, and visceral,
        and veritable the user's experience, the better, too.
      </p>
    </div>
    <img
      className="about__toolbox"
      src={
        window.matchMedia("(max-width: 37.5em)").matches
          ? "/images/about/toolbox-mobile.svg"
          : "/images/about/toolbox.svg"
      }
    />
  </section>
);

export default AboutPage;
