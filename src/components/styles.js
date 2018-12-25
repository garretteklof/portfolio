import styled, { css } from "styled-components";

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
    font-size: 12rem;
    font-weight: 300;
    line-height: 11rem;
  }
  > p {
    grid-column: 1 / -1;
    font-size: 4rem;
    font-weight: 300;
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
  @media only screen and (max-height: 34.375em) {
    top: -2rem;
  }
  a:hover {
    ~ p {
      transform: translate(-7.5rem, 2rem);
      width: 0rem;
      margin: 0;
    }
    > svg {
      transform: translate(-4rem, 0.5rem) rotate(0deg);
      height: 12rem;
      width: 12rem;
    }
    @media only screen and (max-height: 34.375em) {
      ~ p {
        transform: none;
      }
      > svg {
        transform: rotate(-90deg);
      }
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
`;
