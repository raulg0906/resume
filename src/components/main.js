import React from "react";
import Landing from "./Landing";
import Resume from "./Resume";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/resume" component={Resume} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Main;
