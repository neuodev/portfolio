import React from "react";
import Image from "next/image";

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
        <h1 className="mt-2 mb-3 text-5xl font-bold uppercase">I&apos;m <span className="text-main">a web developer</span></h1>
        <p className="mt-2 mb-3 leading-relaxed">
          I&apos;m a Freelance UI/UX Designer and Developer based in London,
          England. I strives to build immersive and beautiful web applications
          through carefully crafted code and user-centric design.
        </p>
        <div>
          <button>More about me</button>
          <button>Portfolio</button>
        </div>
      </div>
    
      </div>
    </div>
  );
};

export default Home;
