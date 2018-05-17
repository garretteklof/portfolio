import React from "react";

import Icon from "../SpriteIcon";

export default class SkillsPage extends React.Component {
  state = { step: 0, fadeIn: false };

  stepForward = () => {
    if (this.state.step > 2) {
      return this.setState({ step: 2 });
    }
    this.setState(
      ({ step }) => ({ step: step + 1, fadeIn: true }),
      () => setTimeout(() => this.setState({ fadeIn: false }), 1000)
    );
  };
  stepBackward = () => {
    if (this.state.step < 0) {
      return this.setState({ step: 0 });
    }
    this.setState(
      ({ step }) => ({ step: step - 1, fadeIn: true }),
      () => setTimeout(() => this.setState({ fadeIn: false }), 1000)
    );
  };

  showSkillsGrid = () => {
    const { step, fadeIn } = this.state;
    switch (step) {
      case 0:
        return (
          <div className={`skills__grid ${fadeIn ? "a-fade-in" : ""}`}>
            <div className="skills__skill">
              <img
                src="/images/tech-logos/html.svg"
                alt="HTML5"
                title="HTML5"
              />
            </div>
            <span className="skills__stars">
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
            </span>
            <div className="skills__skill">
              <img src="/images/tech-logos/css.svg" alt="css3" title="CSS3" />
            </div>
            <span className="skills__stars">
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
            </span>
            <div className="skills__skill">
              <img
                src="/images/tech-logos/js.svg"
                alt="javascript"
                title="Javascript"
              />
            </div>
            <span className="skills__stars">
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star-outlined"} />
            </span>
            <div className="skills__skill">
              <img
                src="/images/tech-logos/react.svg"
                alt="react"
                title="React"
              />
            </div>
            <span className="skills__stars">
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star-outlined"} />
            </span>
            <div className="skills__skill">
              <img
                src="/images/tech-logos/redux.svg"
                alt="redux"
                title="Redux"
              />
            </div>
            <span className="skills__stars">
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star-outlined"} />
            </span>
            <div className="skills__skill">
              <img
                src="/images/tech-logos/firebase.svg"
                alt="firebase"
                title="Firebase"
              />
            </div>
            <span className="skills__stars">
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star-outlined"} />
              <Icon icon={"star-outlined"} />
            </span>
          </div>
        );
      case 1:
        return (
          <div className={`skills__grid ${fadeIn ? "a-fade-in" : ""}`}>
            <div className="skills__skill">
              <img src="/images/tech-logos/node.svg" alt="node" title="Node" />
            </div>
            <span className="skills__stars">
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star-outlined"} />
            </span>
            <div className="skills__skill">
              <img
                src="/images/tech-logos/express.svg"
                alt="express"
                title="Express"
              />
            </div>
            <span className="skills__stars">
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star-outlined"} />
            </span>
            <div className="skills__skill">
              <img
                src="/images/tech-logos/mongodb.svg"
                alt="mongoDB"
                title="MongoDB"
              />
            </div>
            <span className="skills__stars">
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star-outlined"} />
              <Icon icon={"star-outlined"} />
            </span>
            <div className="skills__skill">
              <img
                src="/images/tech-logos/socketio.svg"
                alt="socket.io"
                title="Socket.io"
              />
            </div>
            <span className="skills__stars">
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star-outlined"} />
              <Icon icon={"star-outlined"} />
            </span>
            <div className="skills__skill">
              <img
                src="/images/tech-logos/heroku.svg"
                alt="heroku"
                title="Heroku"
              />
            </div>
            <span className="skills__stars">
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star-outlined"} />
            </span>
            <div className="skills__skill">
              <img
                src="/images/tech-logos/google-developers.svg"
                alt="Google Developers"
                title="Google Developers"
              />
            </div>
            <span className="skills__stars">
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star-outlined"} />
              <Icon icon={"star-outlined"} />
            </span>
          </div>
        );

      case 2:
        return (
          <div className={`skills__grid ${fadeIn ? "a-fade-in" : ""}`}>
            <div className="skills__skill">
              <img
                src="/images/tech-logos/illustrator.svg"
                alt="Adobe Illustrator"
                title="Illustrator"
              />
            </div>
            <span className="skills__stars">
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star-outlined"} />
              <Icon icon={"star-outlined"} />
            </span>
            <div className="skills__skill">
              <img
                src="/images/tech-logos/photoshop.svg"
                alt="Adobe Photoshop"
                title="Photoshop"
              />
            </div>
            <span className="skills__stars">
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star-outlined"} />
              <Icon icon={"star-outlined"} />
              <Icon icon={"star-outlined"} />
            </span>
          </div>
        );
    }
  };

  showSkillsType = () => {
    const { step } = this.state;
    switch (step) {
      case 0:
        return "Front End";
      case 1:
        return "Back End";
      case 2:
        return "Design";
    }
  };

  render() {
    const { step } = this.state;
    return (
      <section className="skills">
        <div className="skills__wrap">
          <h1 className="skills__heading">Skills</h1>
          {this.showSkillsGrid()}
          <div
            className={`skills__pagination skills__pagination--left ${
              step === 0 ? "u-hide--collapse" : ""
            }`}
            onClick={this.stepBackward}
          >
            <Icon icon={"arrow-left"} />
          </div>
          <p className="skills__type">{this.showSkillsType()}</p>
          <div
            className={`skills__pagination skills__pagination--right ${
              step === 2 ? "u-hide--collapse" : ""
            }`}
            onClick={this.stepForward}
          >
            <Icon icon={"arrow-right"} />
          </div>
        </div>
      </section>
    );
  }
}
