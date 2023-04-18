import { Typography, Link, Box } from "@mui/material";
import React from "react";
import me from "../json/me.json";
import Tooltip from "./common/Tooltip";
import LaunchIcon from "@mui/icons-material/Launch";
import { Logo } from "./icons";

export interface IProject {
  thumbnail: string;
  name: string;
  slot: string;
  description: Array<string>;
  techStack: Array<string>;
  repo: string;
  live: string | null;
  screenshots: Array<{
    path: string;
    description: string | null;
  }>;
}

const Project: React.FC<{ project: IProject }> = ({ project }) => {
  return (
    <Box className="mb-8">
      <Tooltip
        placement="top"
        followCursor
        title={
          <Box className="flex px-3 py-1">
            <Typography>Visit on GitHub</Typography>
            <LaunchIcon />
          </Box>
        }
      >
        <Typography
          variant="h5"
          component={Link}
          href={project.repo}
          target="_blank"
        >
          {project.name} — {project.slot}
        </Typography>
      </Tooltip>

      <Box component="ul" className="mt-2">
        {project.description.map((desc, idx) => (
          <Box
            component="li"
            className="list-inside list-disc mb-2 leading-relaxed"
            key={idx}
          >
            {desc}
          </Box>
        ))}
      </Box>

      <Typography component="li">
        Skills:{" "}
        {project.techStack.map((techId: string, idx: number) => {
          const { name, website, about } =
            me.tech[techId as keyof typeof me.tech];
          return (
            <Box key={techId} component="span">
              <Tooltip
                placement="top"
                arrow
                title={
                  <Box className="p-4">
                    <a href={website} target="_blank" rel="noreferrer">
                      <Logo
                        id={techId}
                        className="fill-indigo-500 transition-colors duration-200 mb-4"
                      />
                      <Typography className="text-indigo-500 mb-2" variant="h5">
                        {name}
                        <LaunchIcon className="ml-1 inline-block" />
                      </Typography>
                    </a>
                    <Typography className="text-gray-300" variant="caption">
                      {about}
                    </Typography>
                  </Box>
                }
              >
                <Link
                  key={techId}
                  href={website}
                  target="_blank"
                  className="text-gray-300 no-underline"
                >
                  {name}
                </Link>
              </Tooltip>
              {idx !== project.techStack.length - 1 && " · "}
            </Box>
          );
        })}
      </Typography>
    </Box>
  );
};

export default Project;
