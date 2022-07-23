import React from "react";
import clsx from "clsx";

type InputProps = React.ComponentProps<"input">;

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={clsx(
        "w-full px-4 py-3 placeholder-gray-400 transition rounded-xl focus:outline-none bg-slate-700 focus:bg-slate-600",
        className
      )}
    />
  );
};

export default Input;
