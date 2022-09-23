import type { NextPage } from "next";
import Home from "../components/Home";
import Projects from "../components/Projects";

const Main: NextPage = () => {
  return (
    <div className="bg-black h-screen w-full overflow-xx-hidden snap-y snap-proximity overflow-y-scroll">
      <Home />
      <Projects />
    </div>
  );
};

export default Main;
