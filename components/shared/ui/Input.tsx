import React from "react";
import clsx from "clsx";

type InputProps = React.ComponentProps<"input">;

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={clsx(
        "w-full px-4 py-3 pl-12 transition-colors ring-1 rounded-3xl ring-slate-600 bg-slate-700 focus:outline-none focus:ring-blue-400",
        className
      )}
    />
  );
};

export default Input;
