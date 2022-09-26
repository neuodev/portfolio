import React from "react";
import SectionTitle from "./common/SectionTitle";
import me from "../json/me.json";
import { Logo } from "./icons";
import { Button, Typography } from "@mui/material";
import Tooltip from "./common/Tooltip";
import LaunchIcon from "@mui/icons-material/Launch";
import Link from "next/link";

const Skills = () => {
  const techStack = Object.entries(me.tech).map((entry) => ({
    techId: entry[0],
    ...entry[1],
  }));

  return (
    <div className="min-h-screen snap-start">
      <SectionTitle prefix="My" focus="tech stack" subtitle="<TODO>" />

      <div className="max-w-screen-lg grid grid-cols-12 gap-4 mx-auto">
        {techStack.map((tech) => (
          <Tooltip
            placement="top"
            arrow
            title={
              <div className="p-1">
                <a href={tech.website} target="_blank" rel="noreferrer">
                  <Typography className="text-indigo-500 mb-2" variant="h5">
                    {tech.name}
                    <LaunchIcon className="ml-1 inline-block" />
                  </Typography>
                </a>
                <Typography className="text-gray-300" variant="caption">
                  {tech.about}
                </Typography>
              </div>
            }
            key={tech.techId}
          >
            <Button
              variant="outlined"
              className="group border-transparent group-hover:border-indigo-500 rounded-full w-20 h-20 transition-colors duration-200"
            >
              <Logo
                id={tech.techId}
                className="group-hover:fill-indigo-500 transition-colors duration-200"
              />
            </Button>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Skills;
