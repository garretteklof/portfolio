import React from "react";

export default class AboutPage extends React.Component {
  render() {
    return (
      <section className="about">
        <h1 className="about__heading">It was all a dream...</h1>
        <p>
          And it started, not with an issue of <i>Word Up!</i> magazine, but a
          very elaborate, very pressing, multi-million dollar vision.
        </p>

        <span className="about__iintrinsic">
          <img src="/images/about/iintrinsic.svg" />
          <img src="/images/about/iintrinsic-tagline.svg" />
        </span>

        <p>
          I never did finish it - the next, latest, greatest, multi-million
          dollar social network - but I did end up learning quite a bit about
          web development along the way. From WordPress, to Ruby, to hacking
          through Bootstrap templates and the newest, trendiest, front-end
          frameworks, I slowly but surely began to transmogrify into a real,
          living, breathing, web aficionado.
        </p>

        <p>
          Today, of course, I'm much more polished. I take great pride in
          writing sensible, readable, maintainable code, and very much prescribe
          to the philosphy that cobbling together third-party libraries is
          almost never the answer. I love to take an idea, and nurture it from
          concept to completion. Functional programming is my forte, and
          beautiful, visceral, user experiences, my everlasting quest.
        </p>
        <img className="about__toolbox" src="/images/about/toolbox.svg" />
      </section>
    );
  }
}
