import React from "react";
import FlaskProj from "./FlaskProj";
import HtmlProj from "./HtmlProj";
import ReactProj from "./ReactProj";
import Vanillaprojects from "./Vanillaprojects";

function Projects() {
  return (
    <div>
      <ReactProj />
      <Vanillaprojects />
      <HtmlProj />
      <FlaskProj />
    </div>
  );
}

export default Projects;
