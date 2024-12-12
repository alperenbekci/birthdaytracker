// calculateDaysLeft function calculates the number of days left until the next birthday

const calculateDaysLeft = (date) => {
  const today = new Date();
  const birthday = new Date(date);

  today.setHours(0, 0, 0, 0);
  birthday.setHours(0, 0, 0, 0);

  // set birthday year to current year
  birthday.setFullYear(today.getFullYear());

  // if birthday has already passed, calculate for next year
  if (birthday < today) {
    birthday.setFullYear(today.getFullYear() + 1);
  }

  // calculate the difference between birthday and today
  return Math.ceil((birthday - today) / (1000 * 60 * 60 * 24));
};

export default calculateDaysLeft;
