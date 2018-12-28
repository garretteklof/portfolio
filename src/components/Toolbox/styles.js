import styled, { css, keyframes } from "styled-components";
import { fadeInUp } from "react-animations";
import Icon from "../SpriteIcon";

export const Wrap = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;
  width: 100%;
  background: #ffe74c;
  animation: 0.2s ${keyframes`${fadeInUp}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > * {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;

const disappear = keyframes`
  from { opacity: 1; }
  99% { opacity: 1; }
  to { opacity: 0;  }
`;

export const Header = styled.div`
  position: relative;
  > span {
    position: absolute;
    top: -3rem;
    left: -4rem;
    display: block;
    font-size: 2.4rem;
    font-family: "Inconsolata", monospace;
    color: #393e41;
    transform: rotate(-12deg);
    padding: 0.5rem;
    background: #fefeff;
  }
  > h1 {
    padding: 0 2rem;
    font-size: 6rem;
    background: #393e41;
    color: #fefeff;
  }
  > img {
    height: 6rem;
    width: 6rem;
    position: absolute;
    top: -6rem;
    right: 0;
    &:hover {
      cursor: pointer;
    }
  }
  > aside {
    opacity: 0;
    animation: 2s ${disappear} 2s;
    position: absolute;
    right: 0;
    transform: translateX(calc(100% + 1rem));
    top: -6rem;
    background: #fefeff;
    border: 3px solid #fefeff;
    border-radius: 0.4em;
    padding: 1rem;
    font-size: 1.6rem;
    color: #393e41;
    text-transform: uppercase;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      width: 0;
      height: 0;
      border: 1rem solid transparent;
      border-right-color: #fefeff;
      border-left: 0;
      margin-top: -1rem;
      margin-left: -1rem;
    }
  }
`;

export const Search = styled.div`
  position: relative;
  z-index: 1;
  input {
    padding-right: 2rem;
    background: none;
    border: none;
    text-align: center;
    font-size: 1.8rem;
    font-family: "Inconsolata", monospace;
    border-bottom: 3px dashed #393e41;
    width: 4rem;
    transition: all 0.4s;
    &:focus {
      outline: none;
      border-bottom-style: solid;
      width: 24rem;
      ~ svg {
        right: 0;
        transform: rotate(-10deg);
      }
    }
    ${({ search }) =>
      search &&
      css`
        outline: none;
        border-bottom-style: solid;
        width: 24rem;
        ~ svg {
          right: 0;
          transform: rotate(-10deg);
        }
      `}
  }
`;

export const SearchGlass = styled(Icon)`
  z-index: -1;
  position: absolute;
  top: -2px;
  right: 50%;
  transform: rotate(-10deg) translateX(50%);
  height: 2rem;
  width: 2rem;
  fill: #393e41;
  transition: all 0.4s;
`;

export const DataGrid = styled.div`
  min-height: 28rem;
  min-width: 60rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;

export const DataNug = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  max-height: 8rem;
  align-items: center;
  justify-content: center;
`;

export const ToolWrap = styled.div`
  background: #fefeff;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 17rem;
`;

export const TIWrap = styled.div`
  height: 8rem;
  width: 5rem;
  background: #fefeff;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-right: 5px solid #393e41; */
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.25);
`;

export const TI = styled.img`
  height: 4rem;
  width: 4rem;
`;

export const ToolName = styled.h3`
  text-transform: uppercase;
  text-align: center;
  word-wrap: break-word;
  width: 12rem;
  padding: 0 1rem;
  font-size: 2.4rem;
  color: #393e41;
`;

export const RatingWrap = styled.div`
  height: 8rem;
  width: 5rem;
  background: #fefeff;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-left: 5px solid #393e41; */
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.25);
`;

export const Rating = styled(Icon)`
  height: 4rem;
  width: 4rem;
`;

export const NoData = styled.div`
  grid-column: 1 / -1;
  align-self: center;
  justify-self: center;
  padding: 2rem 2rem;
  font-size: 3rem;
  font-family: "Londrina Solid", cursive;
  text-transform: uppercase;
  background: #393e41;
  color: #fefeff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PagWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > svg:first-of-type {
    transition: transform 0.4s;
    &:hover {
      transform: translateX(-2rem);
    }
  }
  > svg:last-of-type {
    transition: transform 0.4s;
    &:hover {
      transform: translateX(2rem);
    }
  }

  ${({ page }) =>
    page <= 1 &&
    css`
      .toolbox-arrow-back {
        opacity: 0;
        visibility: hidden;
      }
    `}

  ${({ hidePaginateForward }) =>
    hidePaginateForward() &&
    css`
      > .toolbox-arrow-forward {
        opacity: 0;
        visibility: hidden;
      }
    `}
`;

export const PagArrow = styled(Icon)`
  height: 5rem;
  width: 5rem;
  fill: #fefeff;
  background: #393e41;
  &:hover {
    cursor: pointer;
  }
`;

export const LegendWrap = styled.aside`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  background: transparent;
  padding: 1rem 2rem;
  > * {
    &:not(:first-of-type) {
      margin-left: 1rem;
    }
    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
`;

export const LEBack = styled.div`
  position: relative;
  height: 4rem;
  width: 4rem;
  background: #fefeff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
`;

export const LE = styled(Icon)`
  height: 2.5rem;
  width: 2.5rem;
  z-index: 1;
`;

export const LETag = styled.div`
  position: absolute;
  background: #fefeff;
  padding: 0.5rem 0rem;
  font-size: 1.2rem;
  text-align: center;
  ${({ emoji }) => {
    switch (emoji) {
      case "cheer":
        return css`
          top: -1rem;
          left: -4rem;
          transform: rotate(-25deg);
          padding: 0.5rem 0.5rem;
        `;
      case "star":
        return css`
          top: -3rem;
          left: 0;
          width: 4rem;
        `;
      case "happy":
        return css`
          top: -2rem;
          left: 0;
          width: 4rem;
        `;
      case "grad":
        return css`
          top: -3rem;
          left: 0;
          width: 4rem;
        `;
      case "3d":
        return css`
          top: -2rem;
          left: 0;
          transform: rotate(25deg);
          padding: 0.5rem 0.5rem;
        `;
    }
  }}
`;
