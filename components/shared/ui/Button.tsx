import React from "react";
import clsx from "clsx";

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary";
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  return (
    <button
      {...props}
      type="button"
      className={clsx(
        "inline-block px-4 py-2 font-semibold text-center align-middle transition rounded-md disabled:opacity-70 disabled:pointer-events-none",
        [className],
        [
          variant === "primary" && [
            "bg-purple-400 text-purple-900 hover:bg-purple-500",
          ],
        ]
      )}
    >
      {children}
    </button>
  );
};

export default Button;
