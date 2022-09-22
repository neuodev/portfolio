import type { NextPage } from "next";
import Home from "../components/Home";

const Main: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Home />
    </div>
  );
};

export default Main;
