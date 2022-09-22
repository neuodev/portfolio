import React from "react";

const Projects = () => {
  return (
    <div className="font-rubik text-gray-300">
      <div className="w-ful flex items-center justify-center flex-col py-16">
        <h1 className="text-7xl uppercase font-bold">
          My <span className="text-indigo-500">Projects</span>
        </h1>
        <p className="mt-5 flex items-center justify-center">
          <span className="w-9 h-0.5 bg-indigo-500 inline-block"></span>
          <span className="mx-4 inline-block">WANT TO SEE MORE? EMAIL ME.</span>
          <span className="w-9 h-0.5 bg-indigo-500 inline-block"></span>
        </p>
      </div>
    </div>
  );
};

export default Projects;
