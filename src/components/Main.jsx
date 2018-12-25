import React from "react";
import Icon from "./SpriteIcon";
import { MainWrap as Wrap, BitMe, Who, SocialLink, Leftside } from "./styles";

export default class Main extends React.Component {
  render() {
    return (
      <Wrap>
        <Leftside href="https://leftside.design" target="_blank">
          <a href="https://leftside.design" target="_blank">
            <Icon icon="leftside-arrow" />
          </a>
          <p>Got a Cool Idea?</p>
        </Leftside>
        <Who>
          <h1>Garrett Eklof</h1>
          <p>software developer extraordinaire</p>
          <SocialLink href="https://github.com/garretteklof" target="_blank">
            <Icon icon="github" />
          </SocialLink>
          <SocialLink href="mailto:garrett@leftside.design" target="_blank">
            <Icon icon="mail" />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/garrett-eklof"
            target="_blank"
          >
            <Icon icon="linkedin" />
          </SocialLink>
        </Who>
        <BitMe src="images/me.svg" alt="garrett eklof" />
      </Wrap>
    );
  }
}
