import React from "react";
import SectionTitle from "./common/SectionTitle";
import me from "../json/me.json";
import { Logo } from "./icons";
import { Button, Typography } from "@mui/material";
import Tooltip from "./common/Tooltip";
import LaunchIcon from "@mui/icons-material/Launch";

const Skills = () => {
  const techStack = Object.entries(me.tech).map((entry) => ({
    techId: entry[0],
    ...entry[1],
  }));

  return (
    <div className="min-h-screen text-gray-300">
      <SectionTitle
        prefix="My"
        focus="tech stack"
        subtitle="Knowledge is power"
      />

      <div className="max-w-screen-lg grid grid-cols-12 gap-4 mx-auto items-center justify-center p-4">
        {techStack.map((tech) => (
          <div
            key={tech.techId}
            className="col-span-4 md:col-span-3 lg:col-span-2 flex flex-col items-center justify-center"
          >
            <Tooltip
              placement="top"
              arrow
              title={
                <div className="p-1">
                  <a href={tech.website} target="_blank" rel="noreferrer">
                    <Typography className="text-sky-400 mb-2" variant="h5">
                      {tech.name}
                      <LaunchIcon className="ml-1 inline-block" />
                    </Typography>
                  </a>
                  <Typography className="text-gray-300" variant="caption">
                    {tech.about}
                  </Typography>
                </div>
              }
            >
              <Button
                variant="outlined"
                className="group border-transparent hover:!border-sky-400 transition-colors duration-200"
                sx={{
                  width: "5rem",
                  height: "5rem",
                  borderRadius: "50%",
                  borderColor: "transparent",
                }}
              >
                <Logo
                  id={tech.techId}
                  className="group-hover:fill-sky-400 transition-colors duration-200 w-full h-full"
                />
              </Button>
            </Tooltip>
            <p className="mt-2 text-center lg:hidden">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
