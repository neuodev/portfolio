import type { NextPage } from "next";
import Home from "../components/Home";
import Projects from "../components/Projects";

const Main: NextPage = () => {
  return (
    <div className="bg-black">
      <Home />
      <Projects />
    </div>
  );
};

export default Main;
