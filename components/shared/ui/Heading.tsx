import clsx from "clsx";

type HeadingProps = React.ComponentProps<"h6"> & {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Heading: React.FC<HeadingProps> = ({
  children,
  variant = "h6",
  className,
  ...props
}) => {
  const Level = variant;
  return (
    <Level
      {...props}
      className={clsx("font-bold text-slate-200", className, [
        Level === "h1" && "text-4xl",
        Level === "h2" && "text-3xl",
        Level === "h3" && "text-2xl",
        Level === "h4" && "text-xl",
        Level === "h5" && "text-lg",
        Level === "h6" && "text-base",
      ])}
    >
      {children}
    </Level>
  );
};

export default Heading;
