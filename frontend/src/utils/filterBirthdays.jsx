// filterBirtdays function takes in an array of birthdays and a search query

const filterBirthdays = (birthdays, searchQuery) => {
  const lowerQuery = searchQuery.toLowerCase();
  return birthdays?.filter((birthday) => {
    const { name, type, dates } = birthday;

    // use the toLocaleString method to get the month name from the date
    const birthdayDate = new Date(dates);
    const month = birthdayDate
      .toLocaleString("en-US", { month: "long" })
      .toLowerCase();

    return (
      name.toLowerCase().includes(lowerQuery) ||
      type.toLowerCase().includes(lowerQuery) ||
      month.includes(lowerQuery)
    );
  });
};

export default filterBirthdays;
