import { Button, Typography } from "@mui/material";
import React from "react";
import me from "../json/me.json";
import Tooltip from "./common/Tooltip";
import { SocialIcon } from "./icons";

const SocialLinks: React.FC<{}> = () => {
  return (
    <div className="flex items-center justify-start">
      {me.social.map((s) => (
        <Tooltip
          arrow
          placement="top"
          key={s.id}
          title={
            <Typography fontFamily="Rubik">Check me on {s.lable}</Typography>
          }
        >
          <Button
            onClick={() => window.open(s.value)}
            className="group border-transparent group-hover:border-indigo-500 transition-colors duration-200 relative overflow-hidden bg-slide"
            sx={{
              width: "4rem",
              height: "4rem",
              borderRadius: "50%",
              mr: "8px",
            }}
          >
            <SocialIcon id={s.id} size="large" className="fill-indigo-500" />
          </Button>
        </Tooltip>
      ))}
    </div>
  );
};

export default SocialLinks;
