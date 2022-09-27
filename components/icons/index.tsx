import Actix from "./Actix";
import Bash from "./Bash";
import CSS3 from "./CSS3";
import Cucumber from "./Cucumber";
import Cypress from "./Cypress";
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
import TensorFlow from "./TensorFlow";
import TS from "./TS";
import Vim from "./Vim";
import { SVGProps } from "react";
import Apollo from "./Apollo";
import SocketIo from "./Socketio";
import Express from "./Express";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PostgreSQL from "./PostgreSQL";
import MUI from "./MUI";
import Redis from "./Redis";
import OpenCV from "./OpenCV";
import WASM from "./WASM";

export const SOCIAL_ICONS = {
  whatsapp: WhatsAppIcon,
  email: AlternateEmailIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
};

export type SocialIconId = keyof typeof SOCIAL_ICONS;

export const SocialIcon: React.FC<{ id: string; className?: string }> = ({
  id,
  className,
}) => {
  if (!id) throw new Error("ContactId is required");
  let Icon = SOCIAL_ICONS[id as SocialIconId];
  if (!Icon) throw new Error(`'${id}' doesn't have any icon`);
  return <Icon className={className} />;
};
export const DEV_TOOLS: {
  [key: string]: (props: SVGProps<SVGSVGElement>) => JSX.Element;
} = {
  js: JS,
  ts: TS,
  react: ReactIcon,
  redux: Redux,
  nextjs: NextJS,
  graphql: GraphQL,
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
  express: Express,
  postgres: PostgreSQL,
  mui: MUI,
  redis: Redis,
  opencv: OpenCV,
  wasm: WASM,
};

export const Logo: React.FC<{ id: string; className?: string }> = ({
  id,
  className,
}) => {
  let DevTool = DEV_TOOLS[id];

  if (!DevTool) throw new Error(`'${id}' logo not found`);
  return <DevTool className={className} fill="#ffffff" />;
};

Logo.defaultProps = {
  className: "w-10",
};
