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
  constructor(props) {
    super(props);
    this.aboutNode = React.createRef();
    this.skillsNode = React.createRef();
    this.projectsNode = React.createRef();
    this.contactNode = React.createRef();
    this.state = {
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
      },
      scrolled: {
        intro: true,
        about: false,
        skills: false,
        projects: false,
        contact: false
      }
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.animateMobileScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.animateMobileScroll);
  }

  animateMobileScroll = () => {
    if (window.matchMedia("(max-width: 37.5em)").matches) {
      let scrolled;
      if (window.scrollY > this.contactNode.current.offsetTop - 350) {
        scrolled = update(this.state.scrolled, {
          contact: { $set: true }
        });
      } else if (window.scrollY > this.projectsNode.current.offsetTop - 350) {
        scrolled = update(this.state.scrolled, {
          projects: { $set: true }
        });
      } else if (window.scrollY > this.skillsNode.current.offsetTop - 350) {
        scrolled = update(this.state.scrolled, {
          skills: { $set: true }
        });
      } else if (window.scrollY > this.aboutNode.current.offsetTop - 350) {
        scrolled = update(this.state.scrolled, { about: { $set: true } });
      } else {
        scrolled = update(this.state.scrolled, { intro: { $set: true } });
      }
      this.setState(() => ({ scrolled }));
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
    const pageFilterer = currentPage =>
      ["intro", "about", "skills", "projects", "contact"]
        .filter(name => name !== currentPage)
        .forEach(name => {
          classes[name].push("curtain--inactive");
        });
    let classes = {
      intro: [],
      about: [],
      skills: [],
      projects: [],
      contact: []
    };

    classes[curtain].push("curtain");
    classes[curtain].push(`curtain--${curtain}`);

    if (window.matchMedia("(max-width: 37.5em)").matches) {
      if (this.state.scrolled[curtain]) {
        classes[curtain].push("a-scroll-in-curtain");
      }
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
        pageFilterer("intro");
        classes["intro"].push("curtain--active");
        break;
      case 1:
        pageFilterer("about");
        classes["about"].push("curtain--active");
        break;
      case 2:
        pageFilterer("skills");
        classes["skills"].push("curtain--active");
        break;
      case 3:
        pageFilterer("projects");
        classes["projects"].push("curtain--active");
        break;
      case 4:
        pageFilterer("contact");
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
    const nodes = {
      about: this.aboutNode,
      skills: this.skillsNode,
      projects: this.projectsNode,
      contact: this.contactNode
    };
    return (
      <MediaQuery maxWidth={"37.5em"}>
        {matches => {
          if (matches) {
            return (
              <main className="stage">
                <IntroCurtain {...props} {...nodes} />
                <AboutCurtain {...props} {...nodes} />
                <SkillsCurtain {...props} {...nodes} />
                <ProjectsCurtain {...props} {...nodes} />
                <ContactCurtain {...props} {...nodes} />
              </main>
            );
          } else {
            return (
              <main className="stage">
                <IntroCurtain {...props} {...nodes} />
                <AboutCurtain {...props} {...nodes} />
                <SkillsCurtain {...props} {...nodes} />
                <ProjectsCurtain {...props} {...nodes} />
                <ContactCurtain {...props} {...nodes} />
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
