import React from "react";
import { Header as Head } from "./styles";

const Header = ({ history: { push } }) => (
  <Head>
    <span>garrett's</span>
    <h1>TOOLBOX</h1>
    <img src="/images/tool-me.svg" alt="garrett" onClick={() => push("/")} />
    <aside>FYI: click me to go back</aside>
  </Head>
);
export default Header;
