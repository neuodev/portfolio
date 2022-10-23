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
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import { Logo } from "./icons";
import { Typography, Skeleton, IconButton, Box } from "@mui/material";
import Tooltip from "./common/Tooltip";
import me from "../json/me.json";
import theme from "../theme";

export type TechName = keyof typeof me.tech;
const visit = (link: string) => window.open(link);

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
          effect="cards"
          grabCursor
          loop={true}
          modules={[EffectCards]}
        >
          {project.screenshots.map((s) => (
            <SwiperSlide key={s.path}>
              <div className="w-full h-300  md:h-450 relative cursor-pointer overflow-hidden">
                <Skeleton
                  variant="rectangular"
                  className="bg-gray-700 w-full h-full rounded-xl"
                  animation="wave"
                />
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
          className="text-xl md:text-3xl uppercase font-bold text-indigo-500 hover:underline"
          rel="noreferrer"
        >
          {project.name}
        </a>
        <Box
          sx={{
            display: "none",
            [theme.breakpoints.up("md")]: {
              display: "block",
            },
          }}
        >
          <Button
            iconStart={<CancelIcon />}
            variant="secondary"
            className="px-8 py-2"
            onClick={onClose}
          >
            Close
          </Button>
        </Box>

        <IconButton
          onClick={onClose}
          sx={{
            display: "flex",
            [theme.breakpoints.up("md")]: { display: "none" },
          }}
        >
          <CancelIcon className="text-indigo-500" />
        </IconButton>
      </div>

      <div className="my-4 md:my-8 leading-relaxed">
        {project.description.map((d, idx) => (
          <p key={idx} className="text-sm md:text-base">
            {d}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-4">
        {project.techStack.map((tech: string) => {
          let techInfo = me.tech[tech as TechName];
          return (
            <Tooltip
              placement="top"
              followCursor
              key={tech}
              title={
                <Typography className="text-center">
                  {techInfo.about}
                </Typography>
              }
            >
              <a
                href={techInfo.website}
                target="_blank"
                key={tech}
                className="flex items-center justify-center ring ring-indigo-500 px-4 py-1.5 rounded-full cursor-pointer col-span-6 sm:col-span-4 md:col-span-3 bg-slide relative overflow-hidden"
                rel="noreferrer"
              >
                <Logo id={tech} className="w-5 fill-indigo-500 mr-2" />
                <p className="text-indigo-500 font-medium ">{techInfo.name}</p>
              </a>
            </Tooltip>
          );
        })}
      </div>

      <div className="flex flex-row my-8">
        <Button
          onClick={() => visit(project.live)}
          iconStart={<PublicIcon />}
          className="mr-4 w-36"
        >
          Live
        </Button>
        <Button onClick={() => visit(project.repo)} iconStart={<GitHubIcon />}>
          GitHub
        </Button>
      </div>
    </Modal>
  );
};

export default ProjectDetails;
