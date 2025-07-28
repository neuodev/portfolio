import React from "react";
import SectionTitle from "./common/SectionTitle";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <div className="min-h-screen text-white pb-20">
      <SectionTitle
        prefix="Get"
        focus="in touch"
        subtitle="I’m always open to discussing new work or partnerships."
      />
      <div className="max-w-xl lg:max-w-screen-lg mx-auto grid grid-cols-12 gap-5 p-5">
        <div className="col-span-12 flex items-center justify-center">
          <SocialLinks asCols />
        </div>
      </div>
    </div>
  );
};

export default Contact;
