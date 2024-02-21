import { useCallback } from "react";
import type { NextPage } from "next";
import Projects from "../components/Projects";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";
import Contact from "../components/Contact";
import Latest from "../components/Latest";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import Head from "next/head";
import me from "../json/me.json";
import Experience from "../components/Experience";
import Particles from "../components/Particles";
import Testimonials from "../components/Testimonials";

const Main: NextPage = () => {
  const header = `${me.name} - ${me.jobTitle}`;

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{header}</title>
        <meta
          property="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <meta property="description" content={me.aboutme} />
        <meta property="og:title" content={header} />
        <meta property="og:url" content={me.url} />
        <meta property="og:description" content={me.aboutme} />
        <meta property="og:image" content={me.photo} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Particles />
      <div className="bg-dark w-full">
        <AboutMe />
        <Testimonials />
        <Experience />
        <Projects />
        <Skills />
        <Latest />
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default Main;
