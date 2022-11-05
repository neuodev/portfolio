import React from "react";
import SectionTitle from "./common/SectionTitle";
import me from "../json/me.json";

const Introduction = () => {
  return (
    <div className="min-h-screen text-gray-100">
      <SectionTitle
        prefix="More"
        focus="About me"
        subtitle="A little bit about me"
      />

      <div className="flex flex-col items-center justify-center max-w-xl mx-auto leading-6 px-5 md:px-0 text-sm md:text-base">
        {me.experienceOverview.map((e, idx) => (
          <p className="mb-5" key={idx}>
            {e}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
