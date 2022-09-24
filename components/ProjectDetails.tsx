import React from "react";
import Modal from "./common/Modal";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import { IProject } from "./Project";
import Button from "./common/Button";
import CancelIcon from "@mui/icons-material/Cancel";

const ProjectDetails: React.FC<{ project: IProject; onClose(): void }> = ({
  project,
  onClose,
}) => {
  return (
    <Modal open onClose={onClose}>
      <div className="mx-6">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          effect={"cards"}
          grabCursor
          loop={true}
          modules={[EffectCards]}
        >
          {project.screenshots.map((s) => (
            <SwiperSlide key={s.path}>
              <div className="w-full h-450 cursor-pointer">
                <Image
                  src={s.path}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl overflow-hidden"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-between items-center mt-11">
        <a
          href={project.repo}
          target="_blank"
          className="text-3xl uppercase font-bold text-indigo-500 hover:underline"
          rel="noreferrer"
        >
          {project.name}
        </a>
        <Button
          iconStart={<CancelIcon />}
          variant="secondary"
          className="px-8 py-2"
          onClick={onClose}
        >
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default ProjectDetails;
