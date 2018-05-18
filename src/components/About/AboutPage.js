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
        development along the way. From WordPress CMS, to Ruby, to hacking
        through Bootstrap templates and the newest, trendiest, front-end
        frameworks, I slowly but surely began to transmogrify into a real,
        living, breathing, web aficionado.
      </p>

      <p>
        Today, of course, I'm much more polished. I take great pride in writing
        sensible and maintainable code, and I very much prescribe to the
        philosphy that cobbling together third-party libraries is, usually,
        never the answer. I love to take an idea, and nurture it from concept to
        completion. Functional programming is my forte, and beautiful, visceral,
        user experiences, my everlasting quest.
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
