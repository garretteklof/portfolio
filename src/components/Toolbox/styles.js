import styled, { css, keyframes } from "styled-components";
import { fadeInDown } from "react-animations";

export const ToolWrap = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: #ffe74c;
  animation: 0.2s ${keyframes`${fadeInDown}`};
`;
