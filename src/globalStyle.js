import { createGlobalStyle } from "styled-components";

/********** STYLED-COMPONENTS GLOBALS **********/

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
    min-width: 100vw;
    min-height: 100vh;
    height: 100%;
    width: 100%;
  }
  body {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background: #fefeff;
    font-family: "Inconsolata", monospace;
    color: #090909;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Londrina Solid", cursive;
  }
  ::selection {
    background-color: #090909;
    color: #fefeff;
  }
`;
