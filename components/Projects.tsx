import React from "react";
import { Element } from "react-scroll";
import me from "../json/me.json";
import SectionTitle from "./common/SectionTitle";
import Project, { IProject } from "./Project";

const Projects: React.FC<{}> = () => {
  return (
    <Element
      name="projects"
      className="text-gray-300 w-full min-h-screen snap-start"
    >
      <SectionTitle
        prefix="My"
        focus="Projects"
        subtitle={
          <>
            want to see more? checkout my{" "}
            <a
              className="text-sky-400 hover:underline"
              href={me.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </>
        }
      />
      <div className="container mx-auto">
        <div className="max-w-screen-lg mx-auto p-5">
          {me.projects.map((project) => {
            return (
              <Project
                key={project.name.concat("-")}
                project={project as IProject}
              />
            );
          })}
        </div>
      </div>
    </Element>
  );
};

export default Projects;
