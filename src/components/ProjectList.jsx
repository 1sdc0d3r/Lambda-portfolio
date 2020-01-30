import React from "react";
import Project from "./Project";
import { projects } from "../data";

const ProjectList = () => {
  return (
    <section className="project-list">
      {projects.map(e => (
        <Project project={e} key={e.title} />
      ))}
    </section>
  );
};

export default ProjectList;
