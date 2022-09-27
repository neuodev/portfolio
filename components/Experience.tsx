import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import me from "../json/me.json";
import { Box, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Tooltip from "./common/Tooltip";

const Experience = () => {
  return (
    <div className="my-20">
      <Timeline position="alternate">
        {me.experiences.map((ex, idx) => {
          return (
            <TimelineItem key={idx}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="mb-4">
                <Box className="flex items-center justify-start mt-1 mb-4">
                  <CalendarTodayIcon className="text-lg text-indigo-500" />
                  <Typography className="ml-2" variant="caption">
                    {ex.period}
                  </Typography>
                </Box>
                <Tooltip
                  placement="top"
                  arrow
                  followCursor
                  title={
                    <Typography variant="subtitle2">
                      {ex.company.about}
                    </Typography>
                  }
                >
                  <Typography className="mb-3 text-left" variant="h6">
                    <span>{ex.company.name}</span>- {ex.jobTitle}
                  </Typography>
                </Tooltip>
                {ex.roles.map((role, idx) => (
                  <Box key={idx * 10} className="text-left">
                    <p className="font-thin mb-3 leading-relaxed">{role}</p>
                  </Box>
                ))}
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
};

export default Experience;
