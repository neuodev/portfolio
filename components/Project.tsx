import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

export interface IProject {
  thumbnail: string;
  name: string;
  description: Array<string>;
  repo: string;
  live: string;
  screenshots: Array<{
    path: string;
    description: string | null;
  }>;
  techStack: Array<string>;
}

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: "100%",
  width: "100%",
  color: theme.palette.primary.main,
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: `4px solid ${theme.palette.primary.main}`,
      fontWeight: "500",
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
  fontFamily: "Rubik",
  "&:hover": {
    color: theme.palette.common.white,
  },
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const Project: React.FC<{ project: IProject; onSelect(): void }> = ({
  project,
  onSelect,
}) => {
  return (
    <div className="col-span-12 lg:col-span-6 flex items-center justify-center w-full">
      <ImageButton onClick={onSelect} focusRipple key={project.name}>
        <ImageSrc style={{ backgroundImage: `url(${project.thumbnail})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            sx={{
              position: "relative",
              p: 4,
              pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
          >
            {project.name}
            <ImageMarked className="MuiImageMarked-root" />
          </Typography>
        </Image>
      </ImageButton>
    </div>
  );
};

export default Project;
