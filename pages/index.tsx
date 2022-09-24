import type { NextPage } from "next";
import Home from "../components/Home";
import Projects from "../components/Projects";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";

const Main: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="bg-black w-full snap-y snap-proximity h-screen overflow-y-scroll">
        <Home />
        <Projects />
      </div>
    </ThemeProvider>
  );
};

export default Main;
