import { Button, Typography } from "@mui/material";
import React from "react";
import me from "../json/me.json";
import Tooltip from "./common/Tooltip";
import { SocialIcon } from "./icons";
import classnames from "classnames";

const SocialLinks: React.FC<{ asCols: boolean }> = ({ asCols }) => {
  return (
    <div
      className={classnames(
        "flex items-center justify-start",
        asCols ? "flex-col gap-3" : "flex-row",
      )}
    >
      {me.social.map((s) => {
        const icon = (
          <SocialIcon id={s.id} width="35px" className="fill-sky-400" />
        );
        return (
          <Button
            key={s.id}
            onClick={() => window.open(s.url)}
            className="group border-transparent group-hover:border-sky-400 transition-colors duration-200 relative overflow-hidden bg-slide"
            sx={{
              borderRadius: asCols ? "8px" : "50%",
              aspectRatio: asCols ? "unset" : "1/1",
              mr: "8px",
              width: asCols ? "100%" : "unset",
            }}
            startIcon={asCols ? icon : undefined}
          >
            {asCols ? (
              <Typography
                width="100%"
                textAlign="left"
                textTransform="lowercase"
                className="text-sky-400"
              >
                {s.urlAsText}
              </Typography>
            ) : (
              icon
            )}
          </Button>
        );
      })}
    </div>
  );
};

export default SocialLinks;
