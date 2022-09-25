import type { NextPage } from "next";
import Home from "../components/Home";
import Projects from "../components/Projects";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";
import Image from "next/image";
import JS from "../components/icons/JS";
import TS from "../components/icons/TS";
import ReactIcon from "../components/icons/ReactIcon";
import Redux from "../components/icons/Redux";
import NextJS from "../components/icons/NextJS";
import GrpahQL from "../components/icons/GraphQL";
import NodeJS from "../components/icons/NodeJS";
import Actix from "../components/icons/Actix";

const Main: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="bg-black w-full snap-y snap-proximity h-screen overflow-y-scroll">
        <Home />
        <Projects />
        <div className="snap-start h-screen text-white">
          <h1>Icons</h1>
          <JS className="w-10" fill="white" />
          <TS className="w-10" fill="white" />
          <ReactIcon className="w-10" fill="white" />
          <Redux className="w-10" fill="white" />
          <NextJS className="w-10" fill="white" />
          <GrpahQL className="w-10" fill="white" />
          <NodeJS className="w-10" fill="white" />
          <Actix className="w-10" fill="white" />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Main;
