import React from "react";
import Image from "next/image";
import Button from "./common/Button";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-[url('/images/hero.jpg')] relative overlay">
      <div className="relative z-10 flex items-center justify-center h-screen w-screen">
        <div className="ring-8 ring-gray-600 rounded-full overflow-hidden mr-12">
          <Image
            src="/images/ahmed.jpg"
            alt="Ahmed Ibrahim"
            height={300}
            width={300}
          />
        </div>
        <div className="text-white max-w-lg">
          <p className="uppercase text-lg mb-2">HI THERE!</p>
          <h1 className="mt-2 mb-3 text-4xl font-bold uppercase">
            I&apos;m <span className="text-indigo-500">a web developer</span>
          </h1>
          <p className="mt-2 mb-6 leading-relaxed">
            I&apos;m a Freelance UI/UX Designer and Developer based in London,
            England. I strives to build immersive and beautiful web applications
            through carefully crafted code and user-centric design.
          </p>
          <div>
            <Button className="mr-4 w-52" variant="primary">
              More about me
            </Button>
            <Button variant="secondary" className="w-52">
              Portfolio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
