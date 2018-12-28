import styled, { css, keyframes } from "styled-components";
import { bounce, fadeInDown } from "react-animations";

const sizes = {
  [1000]: 1000,
  [700]: 700,
  [600]: 600,
  [500]: 500,
  [400]: 400
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export const MainWrap = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr min-content;
  overflow: hidden;
  animation: 0.2s ${keyframes`${fadeInDown}`};
  ${media[1000]`
    grid-template-columns: 1fr;
    justify-items: center;
  `}
`;

export const BitMe = styled.img`
  margin-top: auto;
  margin-right: 1rem;
  min-height: 60rem;
  max-height: calc(100vw);
  height: calc(100vh - 1rem);
  width: auto;
  ${media[1000]`
    order: -1;
    margin-right: 0;
    height: 100vh;
    transform: translate(2rem, 0.5rem);
    z-index: -1;
  `}
  ${media[700]`
    margin-top: 5rem;
    height: calc(100vh - 5rem);
  `}
  ${media[600]`
    min-height: auto;
    transform: translateX(0);
    margin-top: 12rem;
    height: calc(100vh - 12rem);
  `}
  ${media[500]`
    margin-top: 26rem;
    height: calc(100vh - 26rem);
  `}
  ${media[400]`
    margin-top: 36rem;
    height: calc(100vh - 36rem);
  `}
`;

export const Who = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(3, min-content);
  grid-row-gap: 1.5rem;
  text-align: right;
  @media only screen and (max-height: 34.375em) {
    align-content: end;
  }
  > h1 {
    grid-column: 1 / -1;
    font-size: 14rem;
    font-weight: 300;
    line-height: 12rem;
    @media only screen and (max-height: 34.375em) {
      margin-top: 4rem;
    }
  }
  > p {
    grid-column: 1 / -1;
    font-size: 4rem;
    font-weight: 300;
    padding-left: 14rem; /* force break sentence */
  }
  ${media[1000]`
    border-top: 1rem solid #090909;
    text-align: center;
    width: 100%;
    > p {
      padding-left: 0;
    }
  `}
  ${media[500]`
    > h1 {
      margin-top: 2rem;
      font-size: 10rem;
      line-height: 8rem;
    }
    > p {
      font-size: 3rem;
    }
  `}
`;

export const SocialLink = styled.a`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 50%;
  background-color: #090909;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  transition: all 0.4s;
  justify-self: end;
  ${media[1000]`
    justify-self: center;
  `}
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
  top: 0;
  left: 3rem;
  display: flex;
  align-items: center;
  z-index: 1;
  text-decoration: none;
  color: #090909;
  a:hover {
    ~ p {
      transform: translate(-8rem, -2rem);
    }
    > svg {
      transform: translate(-1rem, 0) rotate(-90deg);
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
    window.innerHeight > 600 &&
    window.innerWidth > 700 &&
    css`
      > p {
        transform: translate(-8rem, -2rem);
      }
      > a > svg {
        transform: translate(-1rem, 0) rotate(-90deg);
      }
    `}
  @media only screen and (max-height: 34.375em) {
    top: -1rem;
    a:hover {
      ~ p {
        transform: none;
      }
      > svg {
        transform: rotate(-90deg);
      }
    }
  }
  ${media[700]`
    top: -1rem;
    left: 50%;
    transform: translateX(-50%);
    a:hover {
      ~ p {
        transform: none;
      }
      > svg {
        transform: rotate(-90deg);
      }
    }
  `}
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
    left: 47%;
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
  @media only screen and (max-height: 34.375em) {
    position: static;
    bottom: auto;
    left: auto;
    transform: none;
  }
  ${media[1000]`
    position: static;
    bottom: auto;
    left: auto;
    transform: none;
    margin-top: 1.5rem;
    color: #393e41;
    background: #ffe74c;
    span {
      display: none;
    }
  `}
  ${media[500]`
    width: 100%;
  `}
`;
