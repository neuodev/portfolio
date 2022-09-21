import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-[url('/images/hero.jpg')] flex items-center justify-center">
      <div>
        <Image
          src="/images/ahmed.jpg"
          alt="Ahmed Ibrahim"
          height={300}
          width={300}
        />
      </div>
      <div>
        <p>HI THERE!</p>
        <h1>I&apos;m a web developer</h1>
        <p>
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
  );
};

export default Home;
