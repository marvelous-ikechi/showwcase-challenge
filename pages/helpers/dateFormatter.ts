export const dateFormatter = (date: Date | null) => {
  const newDate = date ?? new Date();
  const formattedDate = newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  console.log(formattedDate);
  return formattedDate;
};
