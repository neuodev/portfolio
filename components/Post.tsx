import React from "react";
import { Box } from "@mui/material";

export type IPost = {
  image: string;
  url: string;
};

const Post: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <div className="hover:scale-105 cursor-pointer transition-transform shadow-xl hover:shadow-2xl">
      <a href={post.url} target="_blank" rel="noopener noreferrer">
        <Box
          component="img"
          className="inline-block overflow-hidden rounded-md"
          src={post.image}
          alt="Post preview"
        />
      </a>
    </div>
  );
};

export default Post;
