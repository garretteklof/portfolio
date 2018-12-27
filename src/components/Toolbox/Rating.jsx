import React from "react";
import { RatingWrap as Wrap, Rating as Icon } from "./styles";

const Rating = ({ icon, ...rest }) => (
  <Wrap>
    <Icon icon={icon} {...rest} />
  </Wrap>
);

export default Rating;
