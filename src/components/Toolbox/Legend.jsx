import React from "react";
import { LegendWrap as Wrap, LEBack, LE, LETag } from "./styles";

const Legend = () => (
  <Wrap>
    <LEBack>
      <LE icon="emoji-cheer" />
      <LETag emoji="cheer">crackerjack!</LETag>
    </LEBack>
    <LEBack>
      <LE icon="emoji-star" />
      <LETag emoji="star">well-versed</LETag>
    </LEBack>
    <LEBack>
      <LE icon="emoji-happy" />
      <LETag emoji="happy">versed</LETag>
    </LEBack>
    <LEBack>
      <LE icon="emoji-grad" />
      <LETag emoji="grad">moved on</LETag>
    </LEBack>
    <LEBack>
      <LE icon="emoji-3d" />
      <LETag emoji="3d">currently learning</LETag>
    </LEBack>
  </Wrap>
);

export default Legend;
