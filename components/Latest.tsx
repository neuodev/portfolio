import React, { useState } from "react";
import SectionTitle from "./common/SectionTitle";
import me from "../json/me.json";
import Video, { VideoType } from "./Video";
import Modal from "./common/Modal";
import Button from "./common/Button";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";

const Latest = () => {
  const [currVideo, setCurrVideo] = useState<VideoType | null>(null);
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <section className="min-h-screen mb-20">
      <SectionTitle
        prefix="Latest"
        focus="content"
        subtitle="tips, insights, and best practices about web developpment and personal life"
      />

      <div className="grid grid-cols-12 gap-y-10 md:gap-10 max-w-screen-lg mx-4 lg:mx-auto">
        {me.content.videos.slice(0, me.content.videosCutOff).map((v) => (
          <div
            className="col-span-12 md:col-span-6"
            key={v.title}
            onClick={() => setCurrVideo(v)}
          >
            <Video video={v} />
          </div>
        ))}
      </div>

      {showMore && (
        <div className="grid grid-cols-12 mt-10 gap-y-10 md:gap-10 max-w-screen-lg mx-4 lg:mx-auto">
          {me.content.videos.slice(me.content.videosCutOff).map((v) => (
            <div
              className="col-span-12 md:col-span-6"
              key={v.title}
              onClick={() => setCurrVideo(v)}
            >
              <Video video={v} />
            </div>
          ))}
        </div>
      )}

      <Box className="flex items-center justify-center mt-10">
        <Button
          variant="secondary"
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          {showMore ? "Show less" : "Show more"}
        </Button>
      </Box>

      {currVideo !== null && (
        <Modal open onClose={() => setCurrVideo(null)}>
          <iframe
            className="w-full h-300 md:h-450 inline-block bg-gray-900"
            src={`https://www.youtube.com/embed/${currVideo.videoId}`}
            title={currVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
          <div className="flex items-center justify-between mt-4">
            <h1 className="text-xl md:text-4xl font-semibold text-indigo-500">
              {currVideo.title}
            </h1>
            <IconButton onClick={() => setCurrVideo(null)} className="p-0">
              <CancelIcon className="text-indigo-500" />
            </IconButton>
          </div>
          <p className="text-gray-400 mt-2 lg:pr-28 leading-relaxed">
            {currVideo.description}
          </p>

          <Button
            variant="primary"
            className="mt-8"
            onClick={() =>
              window.open(
                `https://www.youtube.com/watch?v=${currVideo.videoId}`
              )
            }
            iconStart={<YouTubeIcon />}
          >
            Watch on Youtube
          </Button>
        </Modal>
      )}
    </section>
  );
};

export default Latest;
