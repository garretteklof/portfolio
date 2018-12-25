import React from "react";
import "../utils/icons.svg";

const Icon = ({ icon, className }) => (
  <svg className={className}>
    <use xlinkHref={`#icons_${icon}`} />
  </svg>
);

export default Icon;
