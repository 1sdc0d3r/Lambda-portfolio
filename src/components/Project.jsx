import React from "react";
import * as background from "../img";

const Project = ({ project }) => {
  const style = {
    backgroundImage: `url(${background[project.img]})`,
    // backgroundImg: require("../img/pic01.jpg"),
    // backgroundSize: "cover"
    backgroundSize: "100% 100%"
  };

  return (
    <article style={style}>
      {/* <img src={require("../img/pic01.jpg")} alt="test" /> */}
      <a
        href="http://github.com/1sdc0d3r"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>{project.title}</h2>
      </a>
      <p>{project.content}</p>
    </article>
  );
};

export default Project;
