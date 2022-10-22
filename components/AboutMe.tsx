import React from "react";
import SectionTitle from "./common/SectionTitle";
import me from "../json/me.json";
import Image from "next/image";
import Button from "./common/Button";
import MuiButton from "@mui/material/Button";
import LaunchIcon from "@mui/icons-material/Launch";
import SocialLinks from "./SocialLinks";
import Experience from "./Experience";
import { Skeleton } from "@mui/material";
import { Element } from "react-scroll";

const AboutMe = () => {
  return (
    <div className="min-h-screen text-gray-100">
      <Element name="aboutme">
        <SectionTitle
          prefix="About"
          focus="Me"
          subtitle="I use my skill set to solve other people's problems"
        />

        <div className="max-w-screen-lg mx-auto min-h-700 p-5">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
            <div className="relative shrink-0 h-300 w-300 md:w-400 md:h-400 lg:h-450 lg:w-450 overflow-hidden rounded-md cursor-pointer ring-4 ring-indigo-500">
              <MuiButton
                sx={{
                  minWidth: "unset",
                  width: "100%",
                  height: "100%",
                  padding: 0,
                  "&& .MuiTouchRipple-rippleVisible": {
                    animationDuration: "500ms",
                  },
                }}
              >
                <Skeleton
                  variant="rectangular"
                  className="bg-gray-700 w-full h-full"
                  animation="wave"
                />
                <Image
                  layout="fill"
                  className="object-contain"
                  src={me.photo}
                  alt={me.name}
                  title={me.name}
                />
              </MuiButton>
            </div>
            <div className="mx-6 max-w-xs px-2 lg:px-0 lg:max-w-max lg:mx-0 lg:ml-8">
              <h1 className="text-xl mt-4 md:mt-0">Hi, 👋! </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 md:mb-3 lg:mb-5">
                I am <span className="text-indigo-500">{me.name}</span>
              </p>
              <p className="font-thin text-base lg:text-lg leading-relaxed mb-5 md:mb-3 lg:mb-5">
                {me.aboutme}
              </p>

              <div className="mb-5 md:mb-3 lg:mb-5 -ml-3">
                <SocialLinks />
              </div>

              <Button
                onClick={() => window.open(me.resume)}
                iconStart={<LaunchIcon />}
                variant="primary"
                className="w-full md:w-auto"
              >
                Take a look at my cv
              </Button>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default AboutMe;
