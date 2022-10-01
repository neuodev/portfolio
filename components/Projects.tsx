import React, { useState } from "react";
import { Element } from "react-scroll";
import me from "../json/me.json";
import SectionTitle from "./common/SectionTitle";
import Project, { IProject } from "./Project";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const [currProject, setCurrProject] = useState<IProject | null>(null);

  return (
    <Element
      name="projects"
      className="text-gray-300 w-full h-screen snap-start"
    >
      <SectionTitle
        prefix="My"
        focus="Projects"
        subtitle={
          <>
            want to see more? checkout my{" "}
            <a
              className="text-indigo-500 hover:underline"
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
        <div className="grid grid-cols-12 grid-rows-4 lg:grid-rows-6 max-w-screen-lg mx-auto gap-1 min-h-700 lg:min-h-700">
          {me.projects.map((project) => (
            <Project
              onSelect={() => setCurrProject(project)}
              key={project.name}
              project={project}
            />
          ))}
        </div>
      </div>
      {currProject !== null && (
        <ProjectDetails
          project={currProject}
          onClose={() => setCurrProject(null)}
        />
      )}
    </Element>
  );
};

export default Projects;
