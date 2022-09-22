import type { NextPage } from "next";
import React from "react";

const Button: NextPage<{
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}> = ({ children, className, variant }) => {
  return (
    <button
      className={`px-8 py-3 ${
        variant === "secondary"
          ? "border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white"
          : "bg-indigo-500 text-white hover:bg-indigo-600"
      } uppercase rounded-3xl hover:ring-2 hover:ring-indigo-400 font-semibold relative overflow-hidden bg-slide ${variant} ${
        className || ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  variant: "primary",
};
