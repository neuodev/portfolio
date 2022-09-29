import type { NextPage } from "next";
import React from "react";

const Button: NextPage<{
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?(): void;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  disabled?: boolean;
}> = ({
  children,
  className,
  variant,
  onClick,
  iconStart,
  iconEnd,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-8 h-12 text-sm ${
        variant === "secondary"
          ? "border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white"
          : "bg-indigo-500 text-white hover:bg-indigo-600"
      } uppercase rounded-3xl hover:ring-2 hover:ring-indigo-400 font-medium relative overflow-hidden bg-slide flex items-center justify-center tracking-widest ${
        disabled &&
        "bg-gray-800 cursor-not-allowed hover:bg-gray-900 hover:ring-gray-400"
      } ${variant} ${className || ""}`}
    >
      {iconStart && <span className="inline-block mr-3">{iconStart}</span>}
      <p className="flex items-center justify-center">{children}</p>
      {iconEnd && <span className="inline-block ml-3">{iconEnd}</span>}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  variant: "primary",
  disabled: false,
};
