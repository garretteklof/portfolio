import styled, { css, keyframes } from "styled-components";
import { bounce, fadeInDown } from "react-animations";
import Icon from "./SpriteIcon";

const COLORS = {
  white: "#fefeff",
  darkGrey: "#393e41",
  blue: "#30bced",
  orange: "#f25757",
  purple: "#e36397",
  yellow: "#ffe74c",
  starYellow: "#f6f740"
};

export const MainWrap = styled.main`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr min-content;
  overflow: hidden;
  animation: 0.2s ${keyframes`${fadeInDown}`};
`;

export const BitMe = styled.img`
  margin-top: auto;
  margin-right: 1rem;
  min-height: 50rem;
  height: calc(100vh - 1rem);
  width: auto;
  @media only screen and (max-height: 31.25em) {
  }
`;

export const Who = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(3, min-content);
  grid-row-gap: 1.5rem;
  text-align: right;
  > h1 {
    grid-column: 1 / -1;
    font-size: 14rem;
    font-weight: 300;
    line-height: 12rem;
  }
  > p {
    grid-column: 1 / -1;
    font-size: 4rem;
    font-weight: 300;
    padding-left: 14rem; /* force break sentence */
  }
`;

export const SocialLink = styled.a`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 50%;
  background-color: #090909;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  transition: all 0.4s;
  justify-self: end;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
  }
  &:active,
  &:focus {
    transform: translateY(0);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
  > svg {
    height: 3.5rem;
    width: 3.5rem;
    fill: #fefeff;
  }
`;

export const Leftside = styled.div`
  position: absolute;
  top: 0rem;
  left: 3rem;
  display: flex;
  align-items: center;
  z-index: 1;
  text-decoration: none;
  color: #090909;
  a:hover {
    ~ p {
      transform: translate(-7.5rem, 2rem);
      width: 0rem;
      margin: 0;
    }
    > svg {
      transform: translate(-4rem, 1rem) rotate(0deg);
      height: 12rem;
      width: 12rem;
    }
  }
  p {
    margin-left: 2rem;
    font-size: 2rem;
    font-family: "Nothing You Could Do", cursive;
    text-transform: lowercase;
    width: 16rem;
    transition: all 0.4s;
  }
  svg {
    height: 8rem;
    width: 8rem;
    transform: rotate(-90deg);
    transition: all 0.4s;
  }

  ${({ hasHovered: { leftside } }) =>
    leftside &&
    css`
      > p {
        transform: translate(-7.5rem, 2rem);
        width: 0rem;
        margin: 0;
      }
      > a > svg {
        transform: translate(-4rem, 1rem) rotate(0deg);
        height: 12rem;
        width: 12rem;
      }
    `}

  @media only screen and (max-height: 34.375em) {
  }
`;

export const SkillsLink = styled.div`
  grid-column: 1 / -1;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  justify-self: end;
  font-size: 2rem;
  font-family: "Londrina Solid", cursive;
  font-weight: 300;
  background: #f7f7f7;
  color: #f7f7f7;
  text-transform: uppercase;
  white-space: nowrap;
  text-align: center;
  padding: 1rem 2rem;
  transition: all 0.4s;
  span {
    position: absolute;
    display: block;
    bottom: -6rem;
    left: 45%;
    font-size: 5rem;
    animation: 6s ${keyframes`${bounce}`} 3s infinite;
  }
  &:hover {
    cursor: pointer;
    color: #090909;
    background: #ffe74c;
    span {
      display: none;
    }
  }
  ${({ hasHovered: { toolbox } }) =>
    toolbox &&
    css`
      color: #393e41;
      background: #ffe74c;
      span {
        display: none;
      }
    `}
`;

export const StarBox = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
`;

export const StarIcon = styled(Icon)`
  height: 10rem;
  width: 10rem;
`;

export const StarBubble = styled.div`
  position: relative;
  background: #f7f7f7;
  border-radius: 0.4em;
  padding: 3rem 2rem;
  text-align: center;
  color: #393e41;
  font-family: "Londrina Solid", cursive;
  font-size: 3rem;
  transform: translate(4rem, -1rem);
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 60px solid transparent;
    border-top-color: #f7f7f7;
    border-bottom: 0;
    border-left: 0;
    margin-left: -15px;
    margin-bottom: -30px;
  }
`;
