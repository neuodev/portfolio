import React, { useState } from "react";
import SectionTitle from "./common/SectionTitle";
import me from "../json/me.json";
import Video, { VideoType } from "./Video";
import Modal from "./common/Modal";
import Button from "./common/Button";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Latest = () => {
  const [currVideo, setCurrVideo] = useState<VideoType | null>(null);
  return (
    <section className="w-full min-h-screen mb-20">
      <SectionTitle
        prefix="Latest"
        focus="content"
        subtitle="tips, insights, and best practices about web developpment and personal life"
      />

      <div className="grid grid-cols-12 gap-10 max-w-screen-lg mx-auto">
        {me.content.videos.map((v) => (
          <div
            className="col-span-6"
            key={v.title}
            onClick={() => setCurrVideo(v)}
          >
            <Video video={v} />
          </div>
        ))}
      </div>

      <Modal open={currVideo !== null} onClose={() => setCurrVideo(null)}>
        <iframe
          className="w-full h-450 inline-block"
          src={`https://www.youtube.com/embed/${currVideo?.videoId}`}
          title={currVideo?.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        <h1 className="text-4xl text-indigo-500 mt-4">{currVideo?.title}</h1>
        <p className="text-gray-400 mt-2 pr-28 leading-relaxed">
          {currVideo?.description}
        </p>

        <Button
          variant="primary"
          className="mt-8"
          onClick={() =>
            window.open(`https://www.youtube.com/watch?v=${currVideo?.videoId}`)
          }
          iconStart={<YouTubeIcon />}
        >
          Watch on Youtube
        </Button>
      </Modal>
    </section>
  );
};

export default Latest;
