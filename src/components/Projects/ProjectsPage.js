import React from "react";

import ProjectsList from "./ProjectsList";
import Project from "./Project";

export default class ProjectsPage extends React.Component {
  state = { project: "", fadeIn: false };

  buildTech = techArray => {
    return techArray.map((tech, i) => (
      <div className="project__tech-logo" key={i}>
        <img
          src={`/images/tech-logos/${tech}.svg`}
          alt={tech}
          title={tech[0].toUpperCase() + tech.substr(1)}
        />
      </div>
    ));
  };

  buildNav = excluded => {
    const navArray = ["aliveberry", "carpi", "skyguy", "chatterbot", "forwird"];
    return navArray.filter(project => project !== excluded);
  };

  setProjectState = project => {
    switch (project) {
      case "aliveberry":
        return this.setState(() => ({ project: "aliveberry" }));
      case "carpi":
        return this.setState(() => ({ project: "carpi" }));
      case "skyguy":
        return this.setState(() => ({ project: "skyguy" }));
      case "chatterbot":
        return this.setState(() => ({ project: "chatterbot" }));
      case "forwird":
        return this.setState(() => ({ project: "forwird" }));
      default:
        return this.setState({ project: "" });
    }
  };

  switchProjectFrames = () => {
    const { project } = this.state;
    let name, description, tech, nav, heroku;
    name = project;
    nav = this.buildNav(name);
    switch (name) {
      case "":
        return <ProjectsList setProjectState={this.setProjectState} />;
      case "aliveberry":
        description =
          "It's alive! Your very own personal, interactive library. Find a book using the Google Books API, adding it to one of three shelves: 'Read', 'Want to Read', and 'Currently Reading'. Shelves are updated on the fly (via Redux), and everything's saved, and stored, and personally tied to your unique login. So, feel free to come and go as you darn well please!";
        tech = this.buildTech([
          "react",
          "redux",
          "node",
          "mongodb",
          "google-developers"
        ]);
        heroku = "https://aliveberry.herokuapp.com/";
        break;
      case "carpi":
        description =
          "An overly ambitious productivity management application aimed to help us visualize how we use our time on a day-to-day basis. Graph out your day, adding or deleting activities seamlessly. Easily pick / sort / filter through dates, and even search / combine dates by a specific activity. Login with your Google account, and witness the lightning fast power of Redux & Firebase!";
        tech = this.buildTech(["react", "redux", "firebase", "bulma"]);
        heroku = "https://carpidiem.herokuapp.com/";
        break;
      case "skyguy":
        description =
          "A simple weather app that gives out up-to-the-second forecasts for any address around the world. Type in a location, and SkyGuy will track it down by first asking Google's Geolocation API for its latitude and longitude, then, racing over to Dark Sky for the full-fledged climate scoop. And, if for whatever reason he gets hung up somewhere in the process, he'll be sure to let you know!";
        tech = this.buildTech([
          "react",
          "node",
          "darksky",
          "google-developers"
        ]);
        heroku = "https://skyguy.herokuapp.com/";
        break;
      case "chatterbot":
        description =
          '"hi -- i am chatterbot -- i am a very inornate, noncomplex chat-room application designed to be a sneak peek into the strength of the fastest and most reliable real-time engine, socket.io -- pick a username, any username -- choose a room, any room -- and have your friends join the same room -- and we shall have a real-time chat -- you can even send your location like Khalid -- bye"';
        tech = this.buildTech(["node", "socketio", "jquery"]);
        heroku = "https://iamchatterbot.herokuapp.com/";
        break;
      case "forwird":
        description =
          "A landing page for a psuedo-company interested in collecting emails for an upcoming launch. When an email is entered, it is verified, before being sent off to MailChimp, a marketing platform with various subscriber-based features.";
        tech = this.buildTech(["node", "mailchimp"]);
        heroku = "https://forwird.herokuapp.com/";
    }
    const props = { name, description, tech, nav, heroku };
    return <Project setProjectState={this.setProjectState} {...props} />;
  };

  render() {
    return (
      <section className="projects">
        <h1
          className={`projects__heading ${
            this.state.project !== "" ? "projects__heading--project" : ""
          }`}
          onClick={() => this.setState({ project: "" })}
        >
          Projects
        </h1>

        {this.switchProjectFrames()}
      </section>
    );
  }
}
