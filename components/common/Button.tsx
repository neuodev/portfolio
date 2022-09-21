import type { NextPage } from "next";
import React from "react";

const Button: NextPage<{ text: string }> = ({ text }) => {
  return <button>{text}</button>;
};

export default Button;
