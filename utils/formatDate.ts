type DateFormatterProps = string | number | Date;

const dateFormatter = (date: DateFormatterProps) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default dateFormatter;
