import React from "react";
import "../utils/icons.svg";

const Icon = ({ icon, ...rest }) => (
  <svg {...rest}>
    <use xlinkHref={`#icons_${icon}`} />
  </svg>
);

export default Icon;
