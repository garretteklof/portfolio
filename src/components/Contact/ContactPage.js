import React from "react";

import Icon from "../SpriteIcon";

const ContactPage = () => (
  <section className="contact">
    <div className="contact__grid">
      <h1 className="contact__heading">Questions, Comments, Grave Concerns?</h1>
      <h4 className="contact__heading contact__heading--secondary">
        Please, let's get in touch.
      </h4>
      <div className="contact__social">
        <a
          className="contact__social-box"
          href="https://github.com/garretteklof"
          target="_blank"
        >
          <Icon icon="github" />
        </a>
        <a
          className="contact__social-box"
          href="mailto:garrett.eklof@gmail.com"
          target="_blank"
        >
          <Icon icon="mail" />
        </a>
        <a
          className="contact__social-box"
          href="https://www.linkedin.com/in/garrett-eklof"
          target="_blank"
        >
          <Icon icon="linkedin" />
        </a>
      </div>
    </div>
    <div className="contact__footer">&copy; garrett eklof, 2018</div>
  </section>
);

export default ContactPage;
