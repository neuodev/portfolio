import React, { useEffect } from "react";
import Image from "next/image";
import Button from "./common/Button";
import Typewriter from "typewriter-effect";
import me from "../json/me.json";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Skeleton } from "@mui/material";
import { Link, Element } from "react-scroll";

const Home = () => {
  return (
    <Element
      name="home"
      className="h-screen w-full bg-[url('/images/hero.jpg')] bg-cover relative overlay snap-start"
    >
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="ring-8 ring-gray-600 shadow-2xl rounded-full overflow-hidden mr-12 relative w-80 h-80 bg-transparent">
          <Image
            src="/images/ahmed.jpg"
            alt={me.name}
            layout="fill"
            className="z-10 shadow-2xl w-80 h-80 inline-block overflow-hidden"
          />
          <Skeleton
            variant="circular"
            className="bg-gray-700"
            width={320}
            height={320}
            animation="wave"
          />
        </div>
        <div className="text-white max-w-lg font-rubik">
          <p className="uppercase text-lg mb-2">HI THERE!</p>
          <h1 className="mt-2 mb-3 text-4xl font-bold uppercase flex items-center justify-start">
            I&apos;m{" "}
            <span className="text-indigo-500 ml-1">
              <Typewriter
                onInit={(typewriter) => {
                  me.jobTitleParts.forEach((p) => {
                    typewriter.typeString(p).pauseFor(200).deleteAll();
                  });
                  typewriter.start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <p className="mt-2 mb-6 leading-relaxed">
            I&apos;m a Freelance UI/UX Designer and Developer based in London,
            England. I strives to build immersive and beautiful web applications
            through carefully crafted code and user-centric design.
          </p>
          <div className="flex">
            <Link to="aboutme" spy smooth duration={200}>
              <Button
                iconStart={<AccountCircleIcon />}
                className="mr-4 w-60 leading-none"
                variant="primary"
              >
                More about me
              </Button>
            </Link>
            <Link to="projects" spy smooth duration={200}>
              <Button
                iconStart={<BusinessCenterIcon />}
                variant="secondary"
                className="w-60 leading-none"
              >
                Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Home;
