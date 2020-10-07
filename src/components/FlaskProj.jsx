import React from "react";
import Tag from "./Tag";
import Card from "./Card";
import projects from "../data/projects";

function FlaskProj() {
  return (
    <div>
      <Tag tag="flask " />
      <div className="grid">
        {projects
          .filter((project) => project.tag === "flask")
          .map((item, index) => (
            <Card
              key={index}
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

export default FlaskProj;
