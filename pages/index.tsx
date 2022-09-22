import type { NextPage } from "next";
import Home from "../components/Home";
import Menu from "../components/Menu";

const Main: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      {/* <Home /> */}
      <div className="w-20 h-full bg-green-300">
        <Menu />
      </div>
      <div className="w-full h-full bg-green-100"></div>
    </div>
  );
};

export default Main;
