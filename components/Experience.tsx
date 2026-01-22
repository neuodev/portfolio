import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Typography, Link } from "@mui/material";
import Tooltip from "./common/Tooltip";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../theme";
import me from "../json/me.json";
import SectionTitle from "./common/SectionTitle";

const Experience = () => {
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  return (
    <div className="min-h-screen text-gray-300">
      <SectionTitle
        prefix="My"
        focus="Experience"
        subtitle="I use my skill set to solve other people's problems"
      />
      <div className="max-w-screen-lg mx-auto">
        <Timeline
          sx={{
            [theme.breakpoints.down(768)]: {
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            },
          }}
          position={isLargeScreen ? "alternate" : undefined}
        >
          {me.experiences.map((ex, idx) => {
            return (
              <TimelineItem key={idx}>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className="mb-4">
                  <Box className="mt-1 mb-3 pt-0.5">
                    <Box className="flex items-center justify-start">
                      <Typography variant="body2" lineHeight={1}>
                        {ex.period}
                      </Typography>
                    </Box>

                    <Typography
                      className="flex items-center justify-start mt-1"
                      variant="body2"
                      lineHeight={1}
                    >
                      {ex.location && ex.location.join(" · ")}
                    </Typography>
                  </Box>
                  <Tooltip
                    placement="top"
                    arrow
                    followCursor
                    title={
                      <Typography variant="body2" className="text-gray-300">
                        {ex.company.about}
                      </Typography>
                    }
                  >
                    <Typography
                      href={ex.company.website}
                      target="_blank"
                      component={Link}
                      className="text-sky-400"
                      sx={{
                        mb: "0.75rem",
                        textAlign: "left",
                        fontSize: "1.25rem",
                        lineHeight: "1.75rem",
                        display: "block",
                        [theme.breakpoints.up("lg")]: {
                          fontSize: "1.5rem",
                          lineHeight: "2rem",
                        },
                      }}
                    >
                      {ex.jobTitle} @ {ex.company.name}
                    </Typography>
                  </Tooltip>
                  <ul>
                    {ex.roles.map((role, idx) => (
                      <li
                        key={idx * 10}
                        className="text-left list-decimal list-inside font-thin mb-3 leading-relaxed text-sm lg:text-base"
                        dangerouslySetInnerHTML={{ __html: role }}
                      />
                    ))}
                  </ul>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </div>
  );
};

export default Experience;
