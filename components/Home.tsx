import React from "react";
import Image from "next/image";
import Button from "./common/Button";
import Typewriter from "typewriter-effect";
import me from "../json/me.json";

const Home = () => {
  return (
    <section className="h-screen w-full bg-[url('/images/hero.jpg')] relative overlay snap-start">
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="ring-8 ring-gray-600 shadow-2xl rounded-full overflow-hidden mr-12">
          <Image
            src="/images/ahmed.jpg"
            alt={me.name}
            height={300}
            width={300}
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
            <Button className="mr-4 w-52 py-3" variant="primary">
              More about me
            </Button>
            <Button variant="secondary" className="w-52 py-3">
              Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
