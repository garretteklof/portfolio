import React from "react";
import Icon from "./SpriteIcon";
import {
  MainWrap as Wrap,
  BitMe,
  Who,
  SocialLink,
  Leftside,
  SkillsLink,
  StarBox,
  StarIcon,
  StarBubble
} from "./styles";

export default class Main extends React.Component {
  state = {
    hasHovered: false
  };
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
          <SkillsLink
            onMouseOver={() => this.setState({ hasHovered: true })}
            onClick={() => this.props.history.push("/toolbox")}
            {...this.state}
          >
            Click Here To Explore Technological Competence
            <span>👀</span>
          </SkillsLink>
          {/* <StarBox>
            <StarBubble>Skills!</StarBubble>
            <StarIcon icon="emoji-star" />
          </StarBox> */}
        </Who>
        <BitMe src="images/me.svg" alt="garrett eklof" />
      </Wrap>
    );
  }
}
