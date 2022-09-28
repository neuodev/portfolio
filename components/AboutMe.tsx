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

        <div className="max-w-screen-lg mx-auto min-h-700">
          <div className="flex items-start justify-center">
            <MuiButton
              sx={{
                minWidth: "unset",
                width: "100%",
                padding: 0,
                "&& .MuiTouchRipple-rippleVisible": {
                  animationDuration: "500ms",
                },
              }}
            >
              <div className="relative shrink-0 h-450 w-450 overflow-hidden rounded-md cursor-pointer">
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
              </div>
            </MuiButton>
            <div className="ml-8">
              <h1 className="text-2xl mb-5">Hi, 👋! </h1>
              <p className="text-4xl font-bold mb-5">
                I am <span className="text-indigo-500">{me.name}</span>
              </p>
              <p className="font-thin text-lg leading-relaxed mb-5">
                {me.aboutme}
              </p>

              <div className="mb-5">
                <SocialLinks />
              </div>

              <Button
                onClick={() => window.open(me.resume)}
                iconStart={<LaunchIcon />}
                variant="primary"
              >
                Take a look at my cv
              </Button>
            </div>
          </div>
          <Experience />
        </div>
      </Element>
    </div>
  );
};

export default AboutMe;
