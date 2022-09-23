import React from "react";
import me from "../json/me.json";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="font-rubik text-gray-300">
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
              href={me.socialMedia.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </span>
          <span className="w-9 h-0.5 bg-indigo-500 inline-block"></span>
        </p>
      </div>

      <Project />
    </div>
  );
};

export default Projects;
