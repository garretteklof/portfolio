import React from "react";

import ContactPage from "./ContactPage";

const ContactCurtain = ({ classes, contact }) => (
  <div className={classes("contact")} ref={contact}>
    <ContactPage />
  </div>
);

export default ContactCurtain;
