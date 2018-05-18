import React from "react";
import update from "immutability-helper";
import MediaQuery from "react-responsive";

import IntroCurtain from "./Intro/IntroCurtain";
import AboutCurtain from "./About/AboutCurtain";
import SkillsCurtain from "./Skills/SkillsCurtain";
import ProjectsCurtain from "./Projects/ProjectsCurtain";
import ContactCurtain from "./Contact/ContactCurtain";

import StagePagination from "./StagePagination";

export default class Stage extends React.Component {
  state = {
    step: 0,
    showTopToggle: false,
    showBottomToggle: true,
    animateTopToggle: false,
    animateBottomToggle: false,
    enterTopToggle: false,
    enterBottomToggle: true,
    raiseCurtain: {
      intro: false,
      about: false,
      skills: false,
      projects: false,
      contact: false
    },
    lowerCurtain: {
      intro: false,
      about: false,
      skills: false,
      projects: false,
      contact: false
    },
    stickyCurtain: {
      intro: false,
      about: false,
      skills: false,
      projects: false,
      contact: false
    }
  };

  resetCurtainState = () => {
    return update(this.state.stickyCurtain, {
      $merge: {
        intro: false,
        about: false,
        skills: false,
        projects: false,
        contact: false
      }
    });
  };

  stepForward = () => {
    const { step } = this.state;
    const reset = this.resetCurtainState();
    let raiseCurtain, stickyCurtain;
    if (step > 4) {
      return this.setState({ step: 4 });
    }

    switch (step) {
      case 0:
        raiseCurtain = update(this.state.raiseCurtain, {
          about: { $set: true }
        });
        stickyCurtain = update(this.state.stickyCurtain, {
          intro: { $set: true }
        });
        break;
      case 1:
        raiseCurtain = update(this.state.raiseCurtain, {
          skills: { $set: true }
        });
        stickyCurtain = update(this.state.stickyCurtain, {
          about: { $set: true }
        });
        break;
      case 2:
        raiseCurtain = update(this.state.raiseCurtain, {
          projects: { $set: true }
        });
        stickyCurtain = update(this.state.stickyCurtain, {
          skills: { $set: true }
        });
        break;
      case 3:
        raiseCurtain = update(this.state.raiseCurtain, {
          contact: { $set: true }
        });
        stickyCurtain = update(this.state.stickyCurtain, {
          projects: { $set: true }
        });
    }
    this.setState(
      ({ step }) => ({
        step: step + 1,
        raiseCurtain,
        stickyCurtain,
        animateBottomToggle: true,
        enterBottomToggle: false,
        enterTopToggle: false
      }),
      () => this.stepForwardCallback()
    );
  };

  stepBackward = () => {
    const { step } = this.state;
    const reset = this.resetCurtainState();
    let lowerCurtain, stickyCurtain;
    if (step < 0) {
      return this.setState({ step: 0 });
    }
    switch (step) {
      case 1:
        lowerCurtain = update(this.state.lowerCurtain, {
          intro: { $set: true }
        });
        stickyCurtain = update(this.state.stickyCurtain, {
          about: { $set: true }
        });
        break;
      case 2:
        lowerCurtain = update(this.state.lowerCurtain, {
          about: { $set: true }
        });
        stickyCurtain = update(this.state.stickyCurtain, {
          skills: { $set: true }
        });
        break;
      case 3:
        lowerCurtain = update(this.state.lowerCurtain, {
          skills: { $set: true }
        });
        stickyCurtain = update(this.state.stickyCurtain, {
          projects: { $set: true }
        });
        break;
      case 4:
        lowerCurtain = update(this.state.lowerCurtain, {
          projects: { $set: true }
        });
        stickyCurtain = update(this.state.stickyCurtain, {
          contact: { $set: true }
        });
    }
    this.setState(
      ({ step }) => ({
        step: step - 1,
        lowerCurtain,
        stickyCurtain,
        animateTopToggle: true,
        enterBottomToggle: false,
        enterTopToggle: false
      }),
      () => this.stepBackwardCallback()
    );
  };

  stepForwardCallback = () => {
    const { step } = this.state;
    const reset = this.resetCurtainState();
    if (step === 0) {
      setTimeout(() => {
        this.setState({
          raiseCurtain: reset,
          stickyCurtain: reset,
          showTopToggle: false,
          showBottomToggle: true,
          animateBottomToggle: false,
          enterBottomToggle: true
        });
      }, 800);
    } else if (step === 4) {
      setTimeout(() => {
        this.setState({
          raiseCurtain: reset,
          stickyCurtain: reset,
          showTopToggle: true,
          showBottomToggle: false,
          animateBottomToggle: false,
          enterBottomToggle: false
        });
      }, 800);
    } else {
      setTimeout(() => {
        this.setState({
          raiseCurtain: reset,
          stickyCurtain: reset,
          showTopToggle: true,
          showBottomToggle: true,
          animateBottomToggle: false,
          enterBottomToggle: true
        });
      }, 800);
    }
  };

  stepBackwardCallback = () => {
    const { step } = this.state;
    const reset = this.resetCurtainState();
    if (step === 0) {
      setTimeout(() => {
        this.setState({
          lowerCurtain: reset,
          stickyCurtain: reset,
          showTopToggle: false,
          showBottomToggle: true,
          animateTopToggle: false,
          enterTopToggle: true
        });
      }, 800);
    } else if (step === 4) {
      setTimeout(() => {
        this.setState({
          lowerCurtain: reset,
          stickyCurtain: reset,
          showTopToggle: true,
          showBottomToggle: false,
          animateTopToggle: false,
          enterTopToggle: true
        });
      }, 800);
    } else {
      setTimeout(() => {
        this.setState({
          lowerCurtain: reset,
          stickyCurtain: reset,
          showTopToggle: true,
          showBottomToggle: true,
          animateTopToggle: false,
          enterTopToggle: true
        });
      }, 800);
    }
  };
  setCurtainClasses = curtain => {
    const { step } = this.state;

    let classes = {
      intro: [],
      about: [],
      skills: [],
      projects: [],
      contact: []
    };

    classes[curtain].push("curtain");
    classes[curtain].push(`curtain--${curtain}`);

    const mobile = window.matchMedia("(max-width: 37.5em)");
    if (mobile.matches) {
      return classes[curtain].join(" ");
    }
    if (this.state.raiseCurtain[curtain]) {
      classes[curtain].push("a-raise-curtain");
    } else if (this.state.lowerCurtain[curtain]) {
      classes[curtain].push("a-lower-curtain");
    } else if (this.state.stickyCurtain[curtain]) {
      classes[curtain].push("curtain--sticky");
    }
    switch (step) {
      case 0:
        classes["intro"].push("curtain--active");
        classes["about"].push("curtain--inactive");
        classes["skills"].push("curtain--inactive");
        classes["projects"].push("curtain--inactive");
        classes["contact"].push("curtain--inactive");

        break;
      case 1:
        classes["intro"].push("curtain--inactive");
        classes["about"].push("curtain--active");
        classes["skills"].push("curtain--inactive");
        classes["projects"].push("curtain--inactive");
        classes["contact"].push("curtain--inactive");
        break;
      case 2:
        classes["intro"].push("curtain--inactive");
        classes["about"].push("curtain--inactive");
        classes["skills"].push("curtain--active");
        classes["projects"].push("curtain--inactive");
        classes["contact"].push("curtain--inactive");
        break;
      case 3:
        classes["intro"].push("curtain--inactive");
        classes["about"].push("curtain--inactive");
        classes["skills"].push("curtain--inactive");
        classes["projects"].push("curtain--active");
        classes["contact"].push("curtain--inactive");
        break;
      case 4:
        classes["intro"].push("curtain--inactive");
        classes["about"].push("curtain--inactive");
        classes["skills"].push("curtain--inactive");
        classes["projects"].push("curtain--inactive");
        classes["contact"].push("curtain--active");
    }
    return classes[curtain].join(" ");
  };

  setPaginationClasses = position => {
    let classes = { top: [], bottom: [] };
    classes[position].push("toggle");
    classes[position].push(`toggle--${position}`);
    if (!this.state.showBottomToggle) {
      classes["bottom"].push("toggle--hide");
    } else if (!this.state.showTopToggle) {
      classes["top"].push("toggle--hide");
    }
    if (this.state.animateTopToggle) {
      classes["top"].push("a-lower-toggle");
    } else if (this.state.animateBottomToggle) {
      classes["bottom"].push("a-raise-toggle");
    }
    if (this.state.enterTopToggle) {
      classes["top"].push("a-enter-toggle--top");
    } else if (this.state.enterBottomToggle) {
      classes["bottom"].push("a-enter-toggle--bottom");
    }
    return classes[position].join(" ");
  };
  render() {
    const props = { classes: this.setCurtainClasses };
    return (
      <MediaQuery maxWidth={"37.5em"}>
        {matches => {
          if (matches) {
            return (
              <main className="stage">
                <IntroCurtain {...props} />
                <AboutCurtain {...props} />
                <SkillsCurtain {...props} />
                <ProjectsCurtain {...props} />
                <ContactCurtain {...props} />
              </main>
            );
          } else {
            return (
              <main className="stage">
                <IntroCurtain {...props} />
                <AboutCurtain {...props} />
                <SkillsCurtain {...props} />
                <ProjectsCurtain {...props} />
                <ContactCurtain {...props} />
                <StagePagination
                  forward={this.stepForward}
                  backward={this.stepBackward}
                  classes={this.setPaginationClasses}
                />
              </main>
            );
          }
        }}
      </MediaQuery>
    );
  }
}
