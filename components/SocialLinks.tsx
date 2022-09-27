import { Typography } from "@mui/material";
import React from "react";
import me from "../json/me.json";
import Tooltip from "./common/Tooltip";
import { SocialIcon } from "./icons";

const SocialLinks: React.FC<{ iconClassName?: string }> = ({
  iconClassName,
}) => {
  return (
    <div className="flex items-center justify-start">
      {me.social.map((s) => (
        <Tooltip
          arrow
          placement="top"
          followCursor
          key={s.id}
          title={
            <Typography fontFamily="Rubik">Check me on {s.lable}</Typography>
          }
        >
          <a
            href={s.value}
            target="_blank"
            className="mr-4 cursor-pointer"
            rel="noreferrer"
          >
            <SocialIcon
              id={s.id}
              className={`fill-indigo-500 ${iconClassName}`}
            />
          </a>
        </Tooltip>
      ))}
    </div>
  );
};

export default SocialLinks;
