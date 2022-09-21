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
          ? "border border-main text-main"
          : "bg-main text-white"
      } uppercase rounded-3xl font-semibold ${className || ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
