const calculateDateDifference = (date) => {
  const currentDate = new Date();
  const timeDiff = Math.abs(date.getTime() - currentDate.getTime());
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysDiff;
};

const getDate = (date) => {
  const preDate = new Date(date);
  const dateFormate = preDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  return dateFormate;
};

export { calculateDateDifference, getDate };
