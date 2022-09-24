import React, { useState } from "react";
import me from "../json/me.json";
import Modal from "./common/Modal";
import Project, { IProject } from "./Project";

const Projects = () => {
  const [currProject, setCurrProject] = useState<IProject | null>(null);

  return (
    <section className="text-gray-300 w-full h-screen snap-start">
      <div className="w-ful flex items-center justify-center flex-col py-16">
        <h1 className="text-7xl uppercase font-bold">
          My <span className="text-indigo-500">Projects</span>
        </h1>
        <p className="mt-5 flex items-center justify-center">
          <span className="w-9 h-0.5 bg-indigo-500 inline-block"></span>
          <span className="mx-4 inline-block uppercase">
            want to see more? checkout my{" "}
            <a
              className="text-indigo-500 hover:underline"
              href={me.social.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </span>
          <span className="w-9 h-0.5 bg-indigo-500 inline-block"></span>
        </p>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 grid-rows-4 lg:grid-rows-6 max-w-screen-lg mx-auto gap-1 min-h-700 lg:min-h-500">
          {me.projects.map((project) => (
            <Project
              onSelect={() => setCurrProject(project)}
              key={project.name}
              project={project}
            />
          ))}
        </div>
      </div>
      <Modal open={currProject !== null} onClose={() => setCurrProject(null)}>
        hello world
      </Modal>
    </section>
  );
};

export default Projects;
