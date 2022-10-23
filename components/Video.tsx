import Image from "next/image";
import React from "react";
import Button from "./common/Button";
import me from "../json/me.json";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Tooltip from "./common/Tooltip";
import { Typography, Skeleton } from "@mui/material";

export type VideoType = typeof me.content.videos[0];

const Video: React.FC<{ video: VideoType }> = ({ video }) => {
  return (
    <div className="text-white w-full">
      <div className="relative h-48  sm:h-72 w-full overflow-hidden cursor-pointer">
        <Skeleton
          variant="rectangular"
          className="bg-gray-700 w-full h-full rounded-md"
          animation="wave"
        />
        <Image
          src={video.thumbnail}
          layout="fill"
          className="object-cover overflow-hidden rounded-md hover:scale-110 transition-transform duration-700"
          alt={video.title}
          title={video.title}
        />
      </div>

      <a className=" mt-3 md:mt-5 md:mb-3 text-gray-100 hover:text-indigo-500 cursor-pointer text-lg lg:text-xl font-medium uppercase inline-block transition-colors duration-150">
        {video.title}
      </a>
      <Tooltip
        arrow
        placement="top"
        followCursor
        title={
          <Typography
            className="text-center"
            sx={{ textAlign: "center" }}
            variant="caption"
          >
            {video.description}
          </Typography>
        }
      >
        <p className="text-sm text-gray-400 sm:truncate">{video.description}</p>
      </Tooltip>
      <Button
        iconStart={<YouTubeIcon />}
        className="mt-3 lg:mt-4"
        variant="primary"
      >
        Watch
      </Button>
    </div>
  );
};

export default Video;
