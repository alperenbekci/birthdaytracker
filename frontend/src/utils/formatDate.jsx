// formatDate function takes a date string and returns a formatted date string

import format from "date-fns/format";

const formatDate = (date) => {
  if (!date) return "Tarih belirtilmemiş";
  return format(new Date(date), "dd/MM/yyyy");
};

export default formatDate;
