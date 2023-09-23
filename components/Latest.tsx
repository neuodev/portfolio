import React, { useState } from "react";
import SectionTitle from "./common/SectionTitle";
import me from "../json/me.json";
import Button from "./common/Button";
import Post, { IPost } from "./Post";

const LatestContent = () => {
  return (
    <section className="min-h-screen mb-20">
      <SectionTitle
        prefix="Latest"
        focus="content"
        subtitle="tips, insights, and best practices about software engineering and personal life"
      />

      <div className="grid grid-cols-12 gap-y-10 md:gap-10 max-w-screen-lg mx-4 lg:mx-auto">
        {me.content.posts.map((post: IPost) => (
          <div className="relative w-full col-span-4" key={post.image}>
            <Post post={post} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestContent;
