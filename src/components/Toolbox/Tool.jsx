import React from "react";
import { ToolWrap, TIWrap, TI, ToolName } from "./styles";

const Tool = ({ name }) => (
  <ToolWrap>
    <TIWrap>
      <TI src={`images/tech-logos/${name}.svg`} alt={name} />
    </TIWrap>
    <ToolName>{name}</ToolName>
  </ToolWrap>
);

export default Tool;
