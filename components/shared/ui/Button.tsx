import React from "react";
import clsx from "clsx";

enum ButtonVariant {
  "primary",
}

type ButtonProps = React.ComponentPropsWithRef<"button"> & {
  variant?: keyof typeof ButtonVariant;
};

const Button: React.FC<ButtonProps> = React.forwardRef(
  ({ children, className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={clsx(
          "inline-block py-2 px-4 text-center align-middle rounded-md transition font-semibold disabled:opacity-70 disabled:pointer-events-none",
          [className],
          [
            variant === "primary" && [
              "bg-purple-400 text-purple-900 hover:bg-purple-500",
            ],
          ]
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
