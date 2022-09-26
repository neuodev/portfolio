import React from "react";
import SectionTitle from "./common/SectionTitle";

const Latest = () => {
  return (
    <section className="w-full snap-start min-h-screen">
      <SectionTitle
        prefix="Latest"
        focus="posts/videos"
        subtitle="tips, insights, and best practices about web developpment and personal life"
      />
    </section>
  );
};

export default Latest;
