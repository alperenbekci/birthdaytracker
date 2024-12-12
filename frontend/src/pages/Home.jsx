import { useState } from "react";

// hooks
import useFetchBirthdays from "../hooks/useFetchBirthdays";

// components
import BirthdayDetails from "../components/BirthdayDetails";
import BirthdayForm from "../components/BirthdayForm";
import SearchBar from "../components/SearchBar";
import calculateDaysLeft from "../utils/calculateDaysLeft";
import filterBirthdays from "../utils/filterBirthdays";

const Home = () => {
  const birthdays = useFetchBirthdays();
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  // filter the birthdays based on the search query
  const filteredBirthdays = filterBirthdays(birthdays, searchQuery);

  // sort the birthdays based on the days left
  const thisWeek = filteredBirthdays
    ?.filter((birthday) => calculateDaysLeft(birthday.dates) <= 7)
    .sort((a, b) => calculateDaysLeft(a.dates) - calculateDaysLeft(b.dates));

  const coming = filteredBirthdays
    ?.filter((birthday) => calculateDaysLeft(birthday.dates) > 7)
    .sort((a, b) => calculateDaysLeft(a.dates) - calculateDaysLeft(b.dates));

  const noBirthdays =
    (!thisWeek || thisWeek.length === 0) && (!coming || coming.length === 0);

  return (
    <>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="home">
        <div>
          {thisWeek && thisWeek.length > 0 && (
            <>
              <h3>This Week</h3>
              {thisWeek.map((birthday) => (
                <BirthdayDetails key={birthday._id} birthday={birthday} />
              ))}
            </>
          )}
          {coming && coming.length > 0 && (
            <>
              <h3>Coming</h3>
              {coming.map((birthday) => (
                <BirthdayDetails key={birthday._id} birthday={birthday} />
              ))}
            </>
          )}
          {noBirthdays && (
            <div className="noBirthdaysMessage">
              <p>Can't you find any birthdays? Maybe you can add one!</p>
              <img
                src="/curved-arrow.png"
                alt="Curved Arrow"
                className="curvedArrowIcon"
              />
            </div>
          )}
        </div>

        <button className="create-user-button" onClick={handleOpenModal}>
          Add Birthday
        </button>
        <BirthdayForm isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </>
  );
};

export default Home;
