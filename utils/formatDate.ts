type FormatDateProps = string | number | Date;

const formatDate = (date: FormatDateProps) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default formatDate;
