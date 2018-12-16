import React from "react";

import Icon from "../SpriteIcon";

export default class SkillsPage extends React.Component {
  state = { step: 0, fadeIn: false };

  componentWillMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.keyCode === 37 && this.state.step !== 0) {
      this.stepBackward();
    } else if (e.keyCode === 39 && this.state.step !== 4) {
      this.stepForward();
    }
  };

  stepForward = () => {
    if (this.state.step > 4) {
      return this.setState({ step: 4 });
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
              <Icon icon={"star"} />
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
              <Icon icon={"star"} />
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
                src="/images/tech-logos/leaflet.svg"
                alt="leaflet"
                title="Leaflet"
              />
            </div>
            <span className="skills__stars">
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star-outlined"} />
            </span>
          </div>
        );
      case 1:
        return (
          <div className={`skills__grid ${fadeIn ? "a-fade-in" : ""}`}>
            <div className="skills__skill">
              <img
                src="/images/tech-logos/styled.png"
                alt="styled-components"
                title="styled-components"
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
              <img
                src="/images/tech-logos/material-ui.svg"
                alt="material-ui"
                title="Material-UI"
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
              <img src="/images/tech-logos/sass.svg" alt="Sass" title="Sass" />
            </div>
            <span className="skills__stars">
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
              <Icon icon={"star"} />
            </span>
            <div className="skills__skill">
              <img src="/images/tech-logos/less.svg" alt="Less" title="Less" />
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
            <div className="skills__skill">
              <img
                src="/images/tech-logos/vue.svg"
                alt="Vue.js"
                title="Vue.js"
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
      case 2:
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
              <Icon icon={"star"} />
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
              <Icon icon={"star"} />
            </span>
            <div className="skills__skill">
              <img
                src="/images/tech-logos/python.svg"
                alt="Python"
                title="Python"
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
                src="/images/tech-logos/flask.svg"
                alt="Flask"
                title="Flask"
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
                src="/images/tech-logos/postgres.svg"
                alt="PostgreSQL"
                title="PostgreSQL"
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

      case 3:
        return (
          <div className={`skills__grid ${fadeIn ? "a-fade-in" : ""}`}>
            <div className="skills__skill">
              <img
                src="/images/tech-logos/webpack.svg"
                alt="Webpack"
                title="Webpack"
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
              <img src="/images/tech-logos/gulp.svg" alt="Gulp" title="Gulp" />
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
                src="/images/tech-logos/babel.svg"
                alt="Babel"
                title="Babel"
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
              <Icon icon={"star"} />
            </span>
          </div>
        );
      case 4:
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
              <Icon icon={"star"} />
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
        return "Front End";
      case 2:
        return "Back End";
      case 3:
        return "Build";
      case 4:
        return "Design";
    }
  };

  render() {
    const { step } = this.state;
    return (
      <section className="skills">
        <div className="skills__wrap">
          <h1 className="skills__heading">Toolbox</h1>
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
              step === 4 ? "u-hide--collapse" : ""
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
