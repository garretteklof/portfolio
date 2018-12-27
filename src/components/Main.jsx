import React from "react";
import Icon from "./SpriteIcon";
import {
  MainWrap as Wrap,
  BitMe,
  Who,
  SocialLink,
  Leftside,
  SkillsLink
} from "./styles";

export default class Main extends React.Component {
  state = {
    hasHovered: {
      leftside: false,
      toolbox: false
    }
  };
  render() {
    const { hasHovered } = this.state;
    const {
      history: { push }
    } = this.props;
    return (
      <Wrap>
        <Leftside
          onMouseOver={() =>
            this.setState({
              hasHovered: { ...hasHovered, leftside: true }
            })
          }
          {...this.state}
        >
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
            onMouseOver={() =>
              this.setState({
                hasHovered: { ...hasHovered, toolbox: true }
              })
            }
            onClick={() => push("/toolbox")}
            {...this.state}
          >
            Click Here To Explore Technological Competence
            <span>👀</span>
          </SkillsLink>
        </Who>
        <BitMe src="images/me.svg" alt="garrett eklof" />
      </Wrap>
    );
  }
}
