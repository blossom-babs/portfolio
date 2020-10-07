import React from "react";
import Tag from "./Tag";
import Card from "./Card";
import projects from "../data/projects";

function Vanillaprojects() {
  return (
    <div>
      <Tag tag="vanilla javascript" />
      <div className="grid">
        {projects
          .filter((project) => project.tag === "vanilla")
          .map((item, index) => (
            <Card
              key={item.index}
              src={item.img}
              alt={item.name}
              proj={item.name}
              desc={item.desc}
              lang={item.lang}
              git={item.gitLink}
              live={item.liveLink}
            />
          ))}
      </div>
    </div>
  );
}

export default Vanillaprojects;
