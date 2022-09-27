import type { NextPage } from "next";
import Home from "../components/Home";
import Projects from "../components/Projects";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";
import Contact from "../components/Contact";
import Latest from "../components/Latest";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";

const Main: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="bg-black w-full snap-y snap-proximity h-screen overflow-y-scroll">
        <Home />
        <AboutMe />
        <Projects />
        <Skills />
        <Latest />
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default Main;
