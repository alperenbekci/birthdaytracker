import { useState } from "react";
import { useBirthdaysContext } from "../hooks/useBirthdaysContext";
import { useAuthContext } from "../hooks/useAuthContext";

import useUpdateBirthday from "../hooks/useUpdateBirthday";

const UpdateBirthdayForm = ({ birthday, closeModal }) => {
  const [name, setName] = useState(birthday.name);
  const [type, setType] = useState(birthday.type);
  const [dates, setDates] = useState(birthday.dates);
  const [error, setError] = useState(null);

  // Use hook for updating birthday
  const updateBirthday = useUpdateBirthday();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBirthday = { name, type, dates };
    updateBirthday(birthday._id, updatedBirthday, setError, closeModal);
  };

  return (
    <div className="modal">
      <form className="update" onSubmit={handleSubmit}>
        <h3>Update Birthday</h3>

        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="friend">Friend</option>
          <option value="family">Family</option>
          <option value="colleague">Colleague</option>
        </select>

        <label>Dates:</label>
        <input
          type="date"
          onChange={(e) => setDates(e.target.value)}
          value={dates}
        />

        <button>Update Birthday</button>
        {error && <div className="error">{error}</div>}
        <button type="button" onClick={closeModal} className="close-modal">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateBirthdayForm;
