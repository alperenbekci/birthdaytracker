import React, { useState } from "react";
import Confetti from "react-confetti";
import { useBirthdaysContext } from "../hooks/useBirthdaysContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useWindowSize } from "react-use";

import UpdateBirthdayForm from "./UpdateBirthdayForm";

// date-fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

// Hooks
import useDeleteBirthday from "../hooks/useDeleteBirthday";

// Utils
import calculateDaysLeft from "../utils/calculateDaysLeft";
import formatDate from "../utils/formatDate";

const BirthdayDetails = ({ birthday }) => {
  const { dispatch } = useBirthdaysContext();
  const { user } = useAuthContext();
  const [showModal, setShowModal] = useState(false);
  const { width, height } = useWindowSize();

  const deleteBirthday = useDeleteBirthday();

  const handleClick = async () => {
    deleteBirthday(birthday._id);
  };

  const formattedDate = formatDate(birthday.dates);

  const daysLeft = calculateDaysLeft(birthday.dates);

  // return daysRemain
  const daysRemain = daysLeft === 0 ? "Today" : `just ${daysLeft} days away `;

  return (
    <div className="birthday-details">
      {daysRemain === "Today" && (
        <Confetti
          width={320}
          height={800}
          recycle={false}
          numberOfPieces={200}
        />
      )}
      <h4>{birthday.name}</h4>

      <div className="info">
        <p>
          <strong>Birth Date : </strong>
          {formattedDate}
        </p>
        <p className="type">{birthday.type}</p>
      </div>

      <div className="info">
        <p>
          <strong> {daysRemain}</strong>
        </p>
        <p className="added">
          {formatDistanceToNow(new Date(birthday.createdAt), {
            addSuffix: true,
          })}
        </p>
      </div>

      <button className="material-symbols-outlined" onClick={handleClick}>
        delete
      </button>
    </div>
  );
};

export default BirthdayDetails;
