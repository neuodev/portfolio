import Actix from "./Actix";
import Bash from "./Bash";
import CSS3 from "./CSS3";
import Cucumber from "./Cucumber";
import Cypress from "./cypress";
import Django from "./Django";
import Docker from "./Docker";
import Electron from "./Electron";
import Flask from "./Flask";
import Git from "./Git";
import GraphQL from "./GraphQL";
import HTML5 from "./HTML";
import Jest from "./Jest";
import JS from "./JS";
import MongoDB from "./MongoDB";
import MySQL from "./MySQL";
import NextJS from "./NextJS";
import NodeJS from "./NodeJS";
import NumPy from "./NumPy";
import Pandas from "./Pandas";
import Python from "./Python";
import ReactIcon from "./ReactIcon";
import Redux from "./Redux";
import Rust from "./Rust";
import SASS from "./SASS";
import Selenium from "./Selenium";
import Sklearn from "./Sklearn";
import TailwindCSS from "./TailwindCSS";
import Tauri from "./Tauri";
import TensorFlow from "./Tensorflow";
import TS from "./TS";
import Vim from "./VIM";
import { SVGProps } from "react";
import Apollo from "./Apollo";
import SocketIo from "./Socketio";

export const DEV_TOOLS: {
  [key: string]: (props: SVGProps<SVGSVGElement>) => JSX.Element;
} = {
  js: JS,
  ts: TS,
  react: ReactIcon,
  redux: Redux,
  nextjs: NextJS,
  grpahql: GraphQL,
  tailwind: TailwindCSS,
  git: Git,
  html: HTML5,
  css: CSS3,
  sass: SASS,
  node: NodeJS,
  python: Python,
  django: Django,
  flask: Flask,
  mysql: MySQL,
  mongodb: MongoDB,
  docker: Docker,
  jest: Jest,
  selenium: Selenium,
  cucumber: Cucumber,
  cypress: Cypress,
  numpy: NumPy,
  pandas: Pandas,
  sklearn: Sklearn,
  tensorflow: TensorFlow,
  rust: Rust,
  bash: Bash,
  vim: Vim,
  electron: Electron,
  actix: Actix,
  tauri: Tauri,
  apollo: Apollo,
  socketio: SocketIo,
};

export const Logo: React.FC<{ id: string; className?: string }> = ({
  id,
  className,
}) => {
  let DevTool = DEV_TOOLS[id];

  if (!DevTool) throw new Error(`'${id}' logo not found`);
  return <DevTool className={className} />;
};

Logo.defaultProps = {
  className: "w-10",
};
