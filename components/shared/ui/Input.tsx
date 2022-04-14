import React from "react";
import clsx from "clsx";

type InputProps = React.ComponentPropsWithRef<"input">;

const Input: React.FC<InputProps> = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          "py-2 px-4 w-full placeholder-gray-400 rounded-md transition focus:outline-none bg-slate-700 focus:bg-slate-600",
          [className]
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
